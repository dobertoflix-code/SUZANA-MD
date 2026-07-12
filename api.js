// api.js — HTTP API for the Vercel pairing page (no Telegram required)
import express from 'express';
import cors from 'cors';
import { spawn } from 'child_process';
import axios from 'axios';
import { createSession, deleteSession, getSession } from './whatsapp.js';

const API_PORT = process.env.API_PORT || 3000;

// Very small in-memory rate limiter: max 3 pair requests per phone number per 5 minutes,
// to stop abuse of the public web form (Telegram has the channel-follow gate instead).
const _recentRequests = new Map(); // phone -> [timestamps]
function isRateLimited(phone) {
  const now = Date.now();
  const windowMs = 5 * 60 * 1000;
  const list = (_recentRequests.get(phone) || []).filter((t) => now - t < windowMs);
  list.push(now);
  _recentRequests.set(phone, list);
  return list.length > 3;
}

export function startApiServer() {
  const app = express();
  app.use(cors()); // allow the Vercel frontend (any origin) to call this API
  app.use(express.json());

  app.get('/api/health', (_req, res) => {
    res.json({ ok: true, bot: 'SUZANA MD' });
  });

  app.post('/api/pair', async (req, res) => {
    try {
      const raw = String(req.body?.phoneNumber || '').replace(/\D/g, '');
      if (!raw || raw.length < 7 || raw.length > 15) {
        return res.status(400).json({ ok: false, error: 'Invalid phone number. Use international format without +.' });
      }
      if (raw.startsWith('0')) {
        return res.status(400).json({ ok: false, error: 'Remove the leading 0. Example: 50968570352' });
      }
      if (isRateLimited(raw)) {
        return res.status(429).json({ ok: false, error: 'Too many requests for this number. Try again in a few minutes.' });
      }

      const existing = getSession(raw);
      if (existing?.connected) {
        return res.json({ ok: true, alreadyConnected: true });
      }

      const { code } = await createSession(raw);
      if (!code) {
        return res.json({ ok: true, alreadyConnected: true });
      }
      return res.json({ ok: true, code, phoneNumber: raw, validForMinutes: 2 });
    } catch (err) {
      console.error('API /api/pair error:', err?.message || err);
      return res.status(500).json({ ok: false, error: 'Server error, please try again.' });
    }
  });

  app.get('/api/status/:phoneNumber', (req, res) => {
    const phone = String(req.params.phoneNumber || '').replace(/\D/g, '');
    const session = getSession(phone);
    res.json({ ok: true, connected: !!session?.connected });
  });

  app.post('/api/unpair', async (req, res) => {
    try {
      const phone = String(req.body?.phoneNumber || '').replace(/\D/g, '');
      const done = deleteSession(phone);
      res.json({ ok: true, disconnected: done });
    } catch (err) {
      res.status(500).json({ ok: false, error: 'Server error, please try again.' });
    }
  });

  app.listen(API_PORT, () => {
    console.log(`🌐 Pairing API listening on port ${API_PORT}`);
    startPublicTunnel(API_PORT);
  });
}

// ── Automatic public tunnel + Telegram notification ─────────────────────────
// Doberto doesn't need to type anything in the console: the bot spawns its
// own Cloudflare quick tunnel, waits for the public URL to appear in the
// process output, then DMs it straight to the Telegram admin so it's easy
// to read (instead of scrolling console logs).
let _tunnelStarted = false;
function startPublicTunnel(port) {
  if (_tunnelStarted) return;
  _tunnelStarted = true;

  const child = spawn('npx', ['--yes', 'cloudflared', 'tunnel', '--url', `http://localhost:${port}`], {
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  let sent = false;
  const onData = async (data) => {
    const text = data.toString();
    const match = text.match(/https:\/\/[a-z0-9-]+\.trycloudflare\.com/i);
    if (match && !sent) {
      sent = true;
      const url = match[0];
      console.log(`🌍 Public tunnel ready: ${url}`);
      await notifyOwnerOnTelegram(
        `🌍 *Pairing API is now public*\n\n➜ ${url}\n\n` +
        `Paste this into the Vercel page's \`API_BASE_URL\` (index.html) and redeploy.\n` +
        `⚠️ This link changes every time the bot restarts.`
      );
    }
  };
  child.stdout.on('data', onData);
  child.stderr.on('data', onData);

  child.on('exit', (code) => {
    console.log(`⚠️ Tunnel process exited (code ${code}).`);
    _tunnelStarted = false;
  });
}

async function notifyOwnerOnTelegram(message) {
  try {
    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_ADMIN_CHAT_ID;
    if (!token || !chatId) return;
    await axios.post(`https://api.telegram.org/bot${token}/sendMessage`, {
      chat_id: chatId,
      text: message,
      parse_mode: 'Markdown',
    });
  } catch (err) {
    console.log('⚠️ Could not notify owner on Telegram:', err?.message || err);
  }
}
