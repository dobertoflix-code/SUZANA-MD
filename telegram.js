/*
Dev : Natsu Tech a votre service 242053323191.
chacun connaît comment évolue les choses les choses de son côté, comme le disait Kalash criminel dans sauvagerie 4 ( grim and the flow ) Natsu toujours vif 242053323191
*/

import { Telegraf, Markup } from 'telegraf';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  createSession,
  deleteSession,
  getAllSessions,
  loadExistingSessions,
} from './whatsapp.js';
import { BOT_NAME, DEV_NAME, PREFIX } from './commands.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, 'data');
const ADMINS_FILE = path.join(DATA_DIR, 'admins.json');
const USERS_FILE = path.join(DATA_DIR, 'users.json');

fs.mkdirSync(DATA_DIR, { recursive: true });

// ⚠️ Required Telegram channels 🇨🇬 Le bot doit être admis dans les liens que tu va mettre ici , pour que le bot detecte les suivis et non suivi by Natsu ✌️────────────────────────────────────────────────
const REQUIRED_CHANNELS = [
  { name: '✆ 𝗕𝗼𝘅 𝗙𝗶𝗹𝗺 & 𝗦𝗲𝗿𝗶𝗲𝘀',       url: 'https://t.me/boxfilmetseries',       username: 'boxfilmetseries'       },
  { name: '✆ 𝗗𝗼𝗯𝗲𝗿𝘁𝗼 𝗠𝗿 𝗟𝗶𝘁 𝗗𝗲𝘃',      url: 'https://t.me/dobertomrlitdevcanal',   username: 'dobertomrlitdevcanal'   },
  { name: '✆ 𝗗𝗼𝗯𝗲𝗿𝘁𝗼 𝗠𝗗𝗩 & 𝗦𝘂𝘇𝗮𝗻𝗮 𝗠𝗗 (𝗖𝗵𝗮𝗻𝗻𝗲𝗹)', url: 'https://t.me/dobertomdvsandsuzanamd',  username: 'dobertomdvsandsuzanamd' },
  { name: '✆ 𝗗𝗼𝗯𝗲𝗿𝘁𝗼 𝗠𝗗𝗩 & 𝗦𝘂𝘇𝗮𝗻𝗮 𝗠𝗗 (𝗚𝗿𝗼𝘂𝗽)',   url: 'https://t.me/dobertomdv2andsuzanamd', username: 'dobertomdv2andsuzanamd' },
];

// ── Helpers ───────────────────────────────────────────────────────────────────
function getAdmins() {
  if (!fs.existsSync(ADMINS_FILE)) {
    const defaults = process.env.TELEGRAM_ADMIN_CHAT_ID
      ? [String(process.env.TELEGRAM_ADMIN_CHAT_ID)]
      : [];
    fs.writeFileSync(ADMINS_FILE, JSON.stringify(defaults, null, 2));
    return defaults;
  }
  try { return JSON.parse(fs.readFileSync(ADMINS_FILE, 'utf8')); } catch { return []; }
}

function isAdmin(ctx) {
  return getAdmins().includes(String(ctx.from?.id));
}

function trackUser(id) {
  let users = [];
  if (fs.existsSync(USERS_FILE)) {
    try { users = JSON.parse(fs.readFileSync(USERS_FILE, 'utf8')); } catch {}
  }
  const sid = String(id);
  if (!users.includes(sid)) {
    users.push(sid);
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
  }
}

function fmtUptime(ms) {
  const s = Math.floor(ms / 1000);
  return `${Math.floor(s / 3600)}h ${Math.floor((s % 3600) / 60)}m ${s % 60}s`;
}

// ── Membership cache: avoids 4 Telegram API calls on every single command ─────
// Without cache, EVERY command was slow (had to check 4 channels each time).
const _membershipCache = new Map(); // userId -> { notJoined: [...], exp: timestamp }
const MEMBERSHIP_TTL = 5 * 60 * 1000; // 5 minutes for passed users

function invalidateMembershipCache(userId) {
  _membershipCache.delete(String(userId));
}

// ── Channel membership check (with 5-minute cache) ────────────────────────────
async function checkChannelMembership(bot, userId) {
  const key = String(userId);
  const now = Date.now();
  const cached = _membershipCache.get(key);

  // Return cached result if still valid (fast path — no API calls)
  if (cached && cached.exp > now) return cached.notJoined;

  const notJoined = [];
  for (const ch of REQUIRED_CHANNELS) {
    try {
      const member = await bot.telegram.getChatMember(`@${ch.username}`, userId);
      const ok = ['member', 'administrator', 'creator'].includes(member.status);
      if (!ok) notJoined.push(ch);
    } catch (err) {
      const m = err?.message || '';
      if (
        m.includes('not enough rights') ||
        m.includes('chat not found') ||
        m.includes('bot is not a member') ||
        m.includes('CHAT_ADMIN_REQUIRED') ||
        m.includes('user not found') ||
        m.includes('Forbidden')
      ) {
        console.log(`⚠️ Cannot verify @${ch.username} (bot not admin) — skipping`);
        continue;
      }
      notJoined.push(ch);
    }
  }

  // Cache: 5 min if passed, 30s if failed (so user can retry quickly)
  _membershipCache.set(key, {
    notJoined,
    exp: now + (notJoined.length === 0 ? MEMBERSHIP_TTL : 30 * 1000),
  });

  return notJoined;
}

async function requireChannels(ctx, bot) {
  const notJoined = await checkChannelMembership(bot, ctx.from?.id);
  if (notJoined.length === 0) return true;

  const buttons = notJoined.map((ch) => [Markup.button.url(`🪐 ${ch.name}`, ch.url)]);
  buttons.push([Markup.button.callback('𝗩𝗲𝗿𝗶𝗳𝘆', 'check_membership')]);

  await ctx.replyWithMarkdown(
    `⚠️ *Access Restricted — ${BOT_NAME}*\n\nJoin all channels to use the bot:\n\n${notJoined.map((c) => `• [${c.name}](${c.url})`).join('\n')}\n\nThen tap ✅ below.`,
    Markup.inlineKeyboard(buttons)
  );
  return false;
}

const botStartTime = Date.now();

// ── Bot startup ───────────────────────────────────────────────────────────────
export async function startTelegramBot() {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  if (!token) {
    console.error('❌ TELEGRAM_BOT_TOKEN is missing.');
    process.exit(1);
  }

  const bot = new Telegraf(token, {
    handlerTimeout: 90_000, // allow slow commands up to 90s without timeout
  });

  // ── Inline button: membership check (force-clears cache so recheck is fresh) ─
  bot.action('check_membership', async (ctx) => {
    await ctx.answerCbQuery('Checking...').catch(() => {});
    invalidateMembershipCache(ctx.from.id); // clear cache so we do a real API check
    const notJoined = await checkChannelMembership(bot, ctx.from.id);
    if (notJoined.length === 0) {
      trackUser(ctx.from.id);
      await ctx.editMessageText(
        `✅ *ᴀᴄᴄᴇss ɢʀᴀɴᴛᴇᴅ! ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ${BOT_NAME}.*\n\nsᴇɴᴅ /start ᴛᴏ ʙᴇɢɪɴ.`,
        { parse_mode: 'Markdown' }
      ).catch(() => {});
    } else {
      const buttons = notJoined.map((ch) => [Markup.button.url(`📢 ${ch.name}`, ch.url)]);
      buttons.push([Markup.button.callback('✅ ɪ ᴊᴏɪɴᴇᴅ ᴀʟʟ ᴄʜᴀɴɴᴇʟs', 'check_membership')]);
      await ctx.editMessageText(
        `❌ *sᴛɪʟʟ ᴍɪssɪɴɢ:*\n\n${notJoined.map((c) => `• [${c.name}](${c.url})`).join('\n')}\n\nᴊᴏɪɴ ᴀɴᴅ ᴛᴀᴘ ᴛʜᴇ ʙᴜᴛᴛᴏɴ ᴀɢᴀɪɴ.`,
        { parse_mode: 'Markdown', reply_markup: Markup.inlineKeyboard(buttons).reply_markup }
      ).catch(() => {});
    }
  });

  bot.action('how_connect', async (ctx) => {
    await ctx.answerCbQuery().catch(() => {});
    await ctx.replyWithMarkdown(
      `*📱 ᴡʜᴀᴛsᴀᴘᴘ ᴄᴏɴɴᴇᴄᴛɪᴏɴ — sᴛᴇᴘs*\n\n1️⃣ sᴇɴᴅ: \`/pair ʏᴏᴜʀ_ɴᴜᴍʙᴇʀ\`\n   ᴇxᴀᴍᴘʟᴇ: \`/pair 50968570352\`\n\n2️⃣ ʏᴏᴜ ɢᴇᴛ ᴀ *8-digit ᴄᴏᴅᴇ*\n   ʟɪᴋᴇ: \`ᴀʙᴄᴅ-1234\`\n\n3️⃣ ᴏɴ ᴡʜᴀᴛsᴀᴘᴘ:\n   ⚙️ sᴇᴛᴛɪɴɢs → ʟɪɴᴋᴇᴅ ᴅᴇᴠɪᴄᴇs\n   → ʟɪɴᴋ a ᴅᴇᴠɪᴄᴇ → ᴜsᴇ ᴘʜᴏɴᴇ ɴᴜᴍʙᴇʀ\n\n4️⃣ ᴇɴᴛᴇʀ ᴛʜᴇ ᴄᴏᴅᴇ ✅\n\n⚠️ ᴄᴏᴅᴇ ᴇxᴘɪʀᴇs ɪɴ *2 ᴍɪɴᴜᴛᴇs*.`
    );
  });

  bot.action('show_status', async (ctx) => {
    await ctx.answerCbQuery().catch(() => {});
    const sessions = getAllSessions();
    if (!sessions.length) return ctx.reply('📊 No active WhatsApp sessions.').catch(() => {});
    const list = sessions.map((s, i) => `${i + 1}. +${s.number} — ${s.connected ? '🟢 Connected' : '🔴 Disconnected'}`).join('\n');
    await ctx.replyWithMarkdown(`📊 *Active sessions (${sessions.length})*\n\n${list}`).catch(() => {});
  });

  // ── /start ──────────────────────────────────────────────────────────────────
  bot.start(async (ctx) => {
    const allowed = await requireChannels(ctx, bot).catch(() => false);
    if (!allowed) return;
    trackUser(ctx.from.id);
    const name = ctx.from.first_name || ctx.from.username || 'User';
    await ctx.replyWithMarkdown(
      `[ *SUZANA MD* ]──────────
👋 Welcome, *${name}*

▣ *PAIRING SYSTEM*
◆ Connect your WhatsApp account
◆ with a secure 8-digit code

▣ *COMMANDS*
◆ /pair 509xxxxxxxx — Connect a number
◆ /delpair 509xxxxxxxx — Remove device
◆ /listpair — View connected numbers
◆ /status — Active sessions
◆ /runtime — Bot uptime
◆ /help — Full menu
◆ /broadcast — Send message to everyone

▣ *EXAMPLE*
➜ /pair 50968570352

────────────────────────
> *DEV :* ${DEV_NAME}
──────────────────────`,
      Markup.inlineKeyboard([
        [Markup.button.callback('📱 𝗛𝗼𝘄 𝘁𝗼 𝗰𝗼𝗻𝗻𝗲𝗰𝘁?', 'how_connect')],
        [Markup.button.callback('📊 𝗩𝗶𝗲𝘄 𝘀𝗲𝘀𝘀𝗶𝗼𝗻𝘀', 'show_status')],
      ])
    );
  });

  // ── Guard middleware ────────────────────────────────────────────────────────
  const guard = (fn) => async (ctx) => {
    const allowed = await requireChannels(ctx, bot).catch(() => false);
    if (!allowed) return;
    trackUser(ctx.from?.id);
    return fn(ctx);
  };

  // ── /help ───────────────────────────────────────────────────────────────────
  bot.command('help', guard(async (ctx) => {
    await ctx.replyWithMarkdown(
      `╭━━━〔 ${BOT_NAME} 〕━━━╮

╭┈⊷┈⊷┈⊷┈⊷┈⊷┈⊷┈⊷┈⊷╮
┃𝗛𝗘𝗟𝗣 𝗖𝗘𝗡𝗧𝗘𝗥
┃ ʏᴏᴜʀ ғᴀsᴛ ʙᴏᴛ
╰┈⊷┈⊷┈⊷┈⊷┈⊷┈⊷┈⊷┈⊷╯
━━━━━━━━━━━━━━━━━━
╭┈⊷┈⊷┈⊷┈⊷┈⊷┈⊷┈⊷┈┈╮
┃ 𝗧𝗘𝗟𝗘𝗚𝗥𝗔𝗠 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦
┃ /pair 509xxxxxxxx
┃ /delpair 509xxxxxxxx
┃ /status
┃ /listpair
┃ /runtime
┃ /broadcast [message]
╰┈⊷┈⊷┈⊷┈⊷┈⊷┈⊷┈⊷┈⊷╯
├─━━━━━━━━━━━━━━━━━━
╭┈⊷┈⊷┈⊷┈⊷┈⊷┈⊷┈⊷┈⊷╮
┃𝗪𝗛𝗔𝗧𝗦𝗔𝗣𝗣 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦
┃
┃ ${PREFIX}ᴍᴇɴᴜ
┃ ${PREFIX}ᴘɪɴɢ
┃ ${PREFIX}ɪɴғᴏ
┃ ${PREFIX}ᴛɪᴍᴇ
┃ ${PREFIX}ᴊᴏᴋᴇ
┃ ${PREFIX}ᴡᴇᴀᴛʜᴇʀ [ᴄɪᴛʏ]
┃ ${PREFIX}ᴄᴀʟᴄ [ᴇxᴘʀᴇssɪᴏɴ]
┃ ${PREFIX}ᴅɪᴄᴛ [ᴡᴏʀᴅ]
┃ ${PREFIX}ᴄᴀᴛ
┃ ${PREFIX}ᴅᴏɢ
┃ ${PREFIX}ᴄʀʏᴘᴛᴏ [ᴄᴏɪɴ]
┃ ${PREFIX}ʏᴛ [sᴇᴀʀᴄʜ]
┃ ${PREFIX}ғᴀᴄᴛ
┃ ${PREFIX}ᴊᴏɪɴ
╰┈⊷┈⊷┈⊷┈⊷┈⊷┈⊷┈⊷┈┈╯
━━━━━━━━━━━━━━━━━━
╭┈⊷┈⊷┈⊷┈⊷┈⊷┈⊷┈⊷┈┈╮
┃       sᴜᴢᴀɴᴀ ᴍᴅ
┃    ᴀɴɪᴍᴇ ɢɪʀʟ ᴇᴅɪᴛɪᴏɴ
┃ ${DEV_NAME}'
╰┈⊷┈⊷┈⊷┈⊷┈⊷┈⊷┈⊷┈┈╯`
);
  }));

  // ── /connect ────────────────────────────────────────────────────────────────
  bot.command('pair', guard(async (ctx) => {
    const parts = ctx.message.text.trim().split(/\s+/);
    const rawNumber = parts[1];
    if (!rawNumber) return ctx.replyWithMarkdown(`❌ *𝗨𝘀𝗮𝗴𝗲:* \`/pair 509xxxxxxxx\``);

    const phone = rawNumber.replace(/\D/g, '');
    if (phone.length < 7 || phone.length > 15)
      return ctx.reply('❌ Invalid number. Use international format without +.');
    if (phone.startsWith('0'))
      return ctx.reply('❌ Remove the leading 0. Ex: `50968570352`');

    await ctx.replyWithMarkdown(`⏳ Generating pairing code for *+${phone}*...`);

    try {
      const { code } = await createSession(phone);
      if (code) {
        await ctx.replyWithMarkdown(
          `╭━━━〔 🔮 𝗣𝗔𝗜𝗥𝗜𝗡𝗚 𝗖𝗢𝗗𝗘 🔮 〕━━━╮
╭━━━━━━━━━━━━━━━━━━
║ 📞 𝗡𝘂𝗺𝗯𝗲𝗿
║➤ +${phone}
║ 🔑 𝗖𝗼𝗱𝗲
║➤ ${code}
║ ⏳ 𝗩𝗮𝗹𝗶𝗱 𝗙𝗼𝗿
║  2 Minutes
╰━━━━━━━━━━━━━━━━━━
╭━━━━━━━━━━━━━━━━━━━
║👑 ${DEV_NAME}
╰━━━━━━━━━━━━━━━━━━╯`
        );
      } else {
        await ctx.replyWithMarkdown(`✅ *+${phone}* 𝗶𝘀 𝗮𝗹𝗿𝗲𝗮𝗱𝘆 𝗰𝗼𝗻𝗻𝗲𝗰𝘁𝗲𝗱!`);
      }
    } catch (err) {
      await ctx.reply(`❌ Error: ${err.message}`);
    }
  }));

  // ── /disconnect ─────────────────────────────────────────────────────────────
  bot.command('delpair', guard(async (ctx) => {
    const parts = ctx.message.text.trim().split(/\s+/);
    const rawNumber = parts[1];
    if (!rawNumber) return ctx.replyWithMarkdown(`❌ *Usage:* \`/delpair 509xxxxxxxx\``);
    const phone = rawNumber.replace(/\D/g, '');
    try {
      const ok = deleteSession(phone);
      await ctx.replyWithMarkdown(
        ok ? `✅ Session *+${phone}* disconnected.` : `⚠️ No session found for *+${phone}*.`
      );
    } catch (err) {
      await ctx.reply(`❌ Error: ${err.message}`);
    }
  }));

  // ── /status ─────────────────────────────────────────────────────────────────
  bot.command('status', guard(async (ctx) => {
    const sessions = getAllSessions();
    if (!sessions.length)
      return ctx.replyWithMarkdown(`📊 *Status — ${BOT_NAME}*\n\nNo active sessions.\nUse /pair to link a number.`);
    const list = sessions.map((s, i) => `*${i + 1}.* +${s.number}\n   ${s.connected ? '🟢 Connected' : '🔴 Disconnected'}`).join('\n\n');
    await ctx.replyWithMarkdown(
      `📊 *WhatsApp Sessions (${sessions.length})*\n\n${list}`,
      Markup.inlineKeyboard([[Markup.button.callback('🔄 Refresh', 'show_status')]])
    );
  }));

  // ── /listpair ───────────────────────────────────────────────────────────────
  bot.command('listpair', guard(async (ctx) => {
    if (!isAdmin(ctx)) return ctx.reply('❌ Admin only.');
    const sessions = getAllSessions();
    if (!sessions.length) return ctx.reply('ℹ️ No paired numbers.');
    const list = sessions.map((s, i) => `*${i + 1}.* \`+${s.number}\``).join('\n');
    await ctx.replyWithMarkdown(`📋 *Paired Numbers — ${sessions.length} total*\n\n${list}`);
  }));

  // ── /runtime ────────────────────────────────────────────────────────────────
  bot.command('runtime', guard(async (ctx) => {
    const mem = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
    await ctx.replyWithMarkdown(
      `⏱️ *${BOT_NAME} Status*\n\n🟢 Uptime: *${fmtUptime(Date.now() - botStartTime)}*\n💾 Memory: *${mem} MB*\n📱 WA Sessions: *${getAllSessions().length}*\n\n> Dev: *${DEV_NAME}*`
    );
  }));

  // ── /broadcast ──────────────────────────────────────────────────────────────
  bot.command('broadcast', async (ctx) => {
    if (!isAdmin(ctx)) return ctx.reply('❌ Admin only.');
    const text = ctx.message.text.split(' ').slice(1).join(' ').trim();
    if (!text) return ctx.reply('Usage: /broadcast [message]');

    let users = [];
    if (fs.existsSync(USERS_FILE)) {
      try { users = JSON.parse(fs.readFileSync(USERS_FILE, 'utf8')); } catch {}
    }

    let ok = 0, fail = 0;
    for (const uid of users) {
      try {
        await bot.telegram.sendMessage(uid, `📢 *Announcement — ${BOT_NAME}*\n\n${text}`, { parse_mode: 'Markdown' });
        ok++;
      } catch { fail++; }
    }
    await ctx.replyWithMarkdown(`✅ *𝗕𝗿𝗼𝗮𝗱𝗰𝗮𝘀𝘁 𝗱𝗼𝗻𝗲*\n\n✅ Sent: ${ok}\n❌ Failed: ${fail}`);
  });

  // ── Catch-all text ──────────────────────────────────────────────────────────
  bot.on('message', async (ctx) => {
    if (ctx.message?.text && !ctx.message.text.startsWith('/')) {
      const allowed = await requireChannels(ctx, bot).catch(() => false);
      if (!allowed) return;
      await ctx.reply(`𝗧𝘆𝗽𝗲 /help 𝘁𝗼 𝘀𝗲𝗲 𝗮𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀. 😊\n> ${BOT_NAME} 𝗯𝘆 ${DEV_NAME}`);
    }
  });

  bot.catch((err) => {
    console.error('Telegraf error:', err.message);
  });

  // ── Load existing sessions then launch ──────────────────────────────────────
  console.log('📂 Loading existing WhatsApp sessions...');
  await loadExistingSessions();

  await bot.launch();

  process.once('SIGINT', () => bot.stop('SIGINT'));
  process.once('SIGTERM', () => bot.stop('SIGTERM'));

  console.log('');
  console.log(`✅ ${BOT_NAME} 𝘀𝘁𝗮𝗿𝘁𝗲𝗱 𝘀𝘂𝗰𝗰𝗲𝘀𝘀𝗳𝘂𝗹𝗹𝘆!`);
  console.log('🤖 𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺 𝗯𝗼𝘁 𝗮𝗰𝘁𝗶𝘃𝗲 — 𝘄𝗮𝗶𝘁𝗶𝗻𝗴 𝗳𝗼𝗿 𝗰𝗼𝗺𝗺𝗮𝗻𝗱𝘀...');
  console.log(`𝗗𝗲𝘃: ${DEV_NAME}`);
  console.log('━'.repeat(40));
}
