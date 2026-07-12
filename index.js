/*
Dev : Natsu Tech a votre service 242053323191.
chacun connaît comment évolue les choses les choses de son côté, comme le disait Kalash criminel dans sauvagerie 4 ( grim and the flow ) Natsu toujours vif 242053323191
*/

import 'dotenv/config';
import { startTelegramBot } from './telegram.js';
import { startApiServer } from './api.js';

// ── GLOBAL CRASH GUARDS ─────────────────────────────────────────────────────
// Baileys sometimes writes creds AFTER we delete the session folder, which
// throws an async ENOENT and kills the whole process. Swallow these so the
// bot stays online instead of crashing the container.
process.on('uncaughtException', (err) => {
  const msg = String(err?.message || err);
  if (/ENOENT|creds\.json|pre-?key|no such file/i.test(msg)) {
    console.log(`⚠️ Ignored non-fatal: ${msg}`);
    return;
  }
  console.error('❗ FATAL uncaughtException, restarting process:', err);
  // Node explicitly warns that continuing after an uncaught exception leaves
  // the process in an undefined state (corrupted listeners/timers). Instead
  // of limping along "connected but unresponsive", exit cleanly so
  // Pterodactyl's process manager restarts the bot within seconds.
  setTimeout(() => process.exit(1), 300);
});
process.on('unhandledRejection', (reason) => {
  const msg = String(reason?.message || reason);
  if (/ENOENT|creds\.json|pre-?key|no such file|Connection Closed|Stream Errored/i.test(msg)) {
    console.log(`⚠️ Ignored non-fatal rejection: ${msg}`);
    return;
  }
  console.error('❗ FATAL unhandledRejection, restarting process:', reason);
  setTimeout(() => process.exit(1), 300);
});

console.log('');
console.log('┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓');
console.log('┃           ✦ 𝗔𝗡𝗚𝗘𝗟𝗔 𝗠𝗗 ✦            ┃');
console.log('┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫');
console.log('┃ ◉ 𝗦𝗧𝗔𝗧𝗨𝗦     ➜ 𝗢𝗡𝗟𝗜𝗡𝗘               ┃');
console.log('┃ ◉ 𝗠𝗢𝗗𝗘       ➜ 𝗠𝗨𝗟𝗧𝗜 𝗗𝗘𝗩𝗜𝗖𝗘         ┃');
console.log('┃ ◉ 𝗦𝗣𝗘𝗘𝗗      ➜ 𝗙𝗔𝗦𝗧 & 𝗦𝗧𝗔𝗕𝗟𝗘        ┃');
console.log('┃ ◉ 𝗦𝗘𝗦𝗦𝗜𝗢𝗡    ➜ 𝗣𝗔𝗜𝗥𝗜𝗡𝗚 𝗔𝗖𝗧𝗜𝗩𝗘       ┃');
console.log('┃ ◉ 𝗗𝗘𝗩𝗘𝗟𝗢𝗣𝗘𝗥  ➜ 𝗗𝗥𝗨𝗭𝗭 𝗗𝗘𝗩            ┃');
console.log('┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛');
console.log('');

if (!process.env.TELEGRAM_BOT_TOKEN) {
  console.error('❌ TELEGRAM_BOT_TOKEN missing from .env file.');
  console.error('   Copy .env.example → .env and fill in your token.');
  process.exit(1);
}

startTelegramBot().catch((err) => {
  console.error('❌ Fatal error:', err.message);
  process.exit(1);
});

startApiServer();
