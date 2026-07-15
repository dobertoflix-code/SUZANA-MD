import axios from "axios";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DATA_DIR = path.join(__dirname, "data");
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, {
    recursive: true
  });
}
export const PREFIX = ".";
export const PREFIXES = [".", "/", "!", "#", ",", "+"];
export const BOT_NAME = "*SUZANA MD*";
export const DEV_NAME = "Doberto Mr Lit";
export const MENU_IMAGE = "https://files.catbox.moe/o7710c.png";
export const MENU_IMAGE_2 = "https://files.catbox.moe/6qv702.jpg";
export const MENU_IMAGES = [MENU_IMAGE, MENU_IMAGE_2];
export const NEWSLETTER_JID = "120363426612149554@newsletter";
export const NEWSLETTER_NAME = "*SUZANA MD*";
export const EXTRA_NEWSLETTER_JIDS = ["120363407485857714@newsletter"];
export const OWNER_NUMBER = "19713836288";
export const OWNER_NAME = "Doberto Mr Lit";
export const OWNER_WA = "*https://wa.me/19713836288*";
export const OWNER_TG = "*https://t.me/addlist/663XOOXWFow0NjAx*";
export const OWNER_GITHUB = "*https://github.com/DobertoMrLit*";
export const OWNER_INSTAGRAM = "*https://instagram.com/doberto.mrlit*";
export const REPO_URL = "*https://github.com/DruzzDe*";
export const BOT_VERSION = "V2.1";
export const WA_CHANNELS = ["*https://whatsapp.com/channel/0029VbCtwNpJkK7Cng8qex1A*"];
export const WA_GROUPS = ["*https://chat.whatsapp.com/CGXH1pFELpkADfSPQxSWeo?s=cl&p=a&ilr=1&amv=1*"];
export function forwardedContext() {
  const _0x31b0e0 = {
    newsletterJid: NEWSLETTER_JID,
    newsletterName: NEWSLETTER_NAME,
    serverMessageId: -1
  };
  const _0x80dfac = {
    title: BOT_NAME,
    body: "> 𝗗𝗘𝗩 : " + DEV_NAME,
    thumbnailUrl: MENU_IMAGE,
    sourceUrl: WA_CHANNELS[0],
    mediaType: 1,
    renderLargerThumbnail: false
  };
  const _0x4363df = {
    isForwarded: true,
    forwardingScore: 999,
    forwardedNewsletterMessageInfo: _0x31b0e0,
    externalAdReply: _0x80dfac
  };
  return _0x4363df;
}
const STATE_FILE = path.join(DATA_DIR, "state.json");
function loadState() {
  const _0x3b5c49 = {
    bjbAK: function (_0x416795, _0x136db5) {
      return _0x416795 === _0x136db5;
    },
    bxIbl: "EoSKl",
    IoEzj: "QPjJT",
    OxjtV: "utf8",
    Svamr: function (_0x30f05b, _0x569c1e) {
      return _0x30f05b !== _0x569c1e;
    },
    nYcGq: "ktisy",
    wcUNw: "ESjPq"
  };
  const _0x1259fc = _0x3b5c49;
  try {
    if (_0x1259fc.bjbAK(_0x1259fc.bxIbl, _0x1259fc.IoEzj)) {
      _0xc6c961.tempmail = _0x2985ff.data[0];
    } else {
      return JSON.parse(fs.readFileSync(STATE_FILE, _0x1259fc.OxjtV));
    }
  } catch {
    if (_0x1259fc.Svamr(_0x1259fc.nYcGq, _0x1259fc.wcUNw)) {
      return {};
    } else {
      _0x28bec7 += "\n*" + _0x5a0005 + "*\n";
      _0x3599e7 += _0xd28ffd.map(_0x2abeb5 => "*║➤├▢ " + _0x21a375 + _0x2abeb5 + "*").join("\n");
      _0xadb687 += "\n";
    }
  }
}
let _stateCache = null;
function saveState(_0x55c6c8) {
  fs.writeFileSync(STATE_FILE, JSON.stringify(_0x55c6c8, null, 2));
  _stateCache = _0x55c6c8;
}
function getState() {
  if (_stateCache) return _stateCache;
  const _0x52d181 = loadState();
  _0x52d181.sudo ??= ["50935878442", "19713836288"];
  _0x52d181.banned ??= [];
  _0x52d181.blocked ??= [];
  _0x52d181.antilink ??= true;
  _0x52d181.mode ??= "self";
  _0x52d181.autoread ??= false;
  _0x52d181.autobio ??= false;
  _0x52d181.autorecord ??= false;
  _0x52d181.autotyping ??= true;
  _0x52d181.autoviewsts ??= true;
  _0x52d181.autoreact ??= false;
  _0x52d181.autoreactchannel ??= true;
  _0x52d181.account ??= "";
  _0x52d181.warns ??= {};
  _0x52d181.afks ??= {};
  _0x52d181.prefix ??= ".";
  _stateCache = _0x52d181;
  return _0x52d181;
}
function updateState(_0x67bcba) {
  const _0x416db1 = getState();
  _0x67bcba(_0x416db1);
  saveState(_0x416db1);
  return _0x416db1;
}
const RAND = _0x585106 => _0x585106[Math.floor(Math.random() * _0x585106.length)];
export function getMessageText(_0x9927ae) {
  const _0x5bbb62 = {
    fNrPE: function (_0x297640, _0x54261b) {
      return _0x297640 || _0x54261b;
    }
  };
  const _0x1502c1 = _0x5bbb62;
  if (!_0x9927ae?.message) {
    return "";
  }
  const _0x30f5ef = _0x9927ae.message;
  const _0x33199b = _0x30f5ef.ephemeralMessage?.message || _0x30f5ef.viewOnceMessage?.message || _0x30f5ef.viewOnceMessageV2?.message?.message || _0x30f5ef.documentWithCaptionMessage?.message || null;
  const _0x20339a = _0x1502c1.fNrPE(_0x33199b, _0x30f5ef);
  return (_0x20339a.conversation || _0x20339a.extendedTextMessage?.text || _0x20339a.imageMessage?.caption || _0x20339a.videoMessage?.caption || _0x20339a.documentMessage?.caption || _0x20339a.buttonsResponseMessage?.selectedDisplayText || _0x20339a.templateButtonReplyMessage?.selectedDisplayText || _0x20339a.listResponseMessage?.singleSelectReply?.selectedRowId || "").trim();
}
function isGroup(_0x552a27) {
  return _0x552a27?.endsWith("@g.us");
}
const _groupMetaCache = new Map();
const GROUP_META_TTL = 60000;
async function getGroupAdmins(_0x5bdee9, _0xffa046) {
  const _0x147891 = {
    NpxwH: "utf8",
    htIBr: function (_0x3534df, _0x59ea08) {
      return _0x3534df === _0x59ea08;
    },
    oapJN: "ShqGb",
    GpAzw: function (_0x5e4b4b, _0x1fac39) {
      return _0x5e4b4b > _0x1fac39;
    },
    mWmwE: function (_0x27e792, _0x1c3c53) {
      return _0x27e792 !== _0x1c3c53;
    },
    Drzmf: "bGfbr",
    IDHTB: function (_0x31aabb, _0x568e94) {
      return _0x31aabb === _0x568e94;
    },
    GFghb: "BTrwA",
    DcKSm: "XxkIb",
    gJzCA: function (_0x573301, _0x3f79ae) {
      return _0x573301 + _0x3f79ae;
    },
    IqYTh: function (_0x5dd90d, _0x545e38) {
      return _0x5dd90d + _0x545e38;
    },
    YKSSt: "@lid",
    XXnEy: "phjSZ",
    qtDwA: "ZLdfG"
  };
  const _0x5613c1 = _0x147891;
  try {
    if (_0x5613c1.htIBr(_0x5613c1.oapJN, _0x5613c1.oapJN)) {
      const _0x38fd75 = Date.now();
      const _0x8a2b2e = _groupMetaCache.get(_0xffa046);
      let _0x2f26c9;
      if (_0x8a2b2e && _0x5613c1.GpAzw(_0x8a2b2e.exp, _0x38fd75)) {
        if (_0x5613c1.mWmwE(_0x5613c1.Drzmf, _0x5613c1.Drzmf)) {
          return _0xba7596.parse(_0x3f73c6.readFileSync(_0x4ecaa9, nEtImw.NpxwH));
        } else {
          _0x2f26c9 = _0x8a2b2e.meta;
        }
      } else if (_0x5613c1.IDHTB(_0x5613c1.GFghb, _0x5613c1.DcKSm)) {
        const _0x2c027e = {
          newsletterJid: _0x2da2d7,
          newsletterName: _0x5e2b66,
          serverMessageId: -1
        };
        const _0x3d0283 = {
          title: _0x1a1f0e,
          body: "> 𝗗𝗘𝗩 : " + _0x53d54f,
          thumbnailUrl: _0x2d9954,
          sourceUrl: _0x13e5a1[0],
          mediaType: 1,
          renderLargerThumbnail: false
        };
        const _0x3260e7 = {
          isForwarded: true,
          forwardingScore: 999,
          forwardedNewsletterMessageInfo: _0x2c027e,
          externalAdReply: _0x3d0283
        };
        return _0x3260e7;
      } else {
        _0x2f26c9 = await _0x5bdee9.groupMetadata(_0xffa046);
        _groupMetaCache.set(_0xffa046, {
          meta: _0x2f26c9,
          exp: _0x5613c1.gJzCA(_0x38fd75, GROUP_META_TTL)
        });
      }
      const _0x4b0fbd = _0x2f26c9.participants.filter(_0x1bcafc => _0x1bcafc.admin).map(_0x64ccf => _0x64ccf.id);
      const _0x1e3292 = _0x5bdee9.user?.id || "";
      const _0x5eb9a0 = _0x5bdee9.user?.lid || "";
      const _0xcb3e3f = _0x1e3292.split(":")[0].split("@")[0];
      const _0x68bad8 = _0xcb3e3f ? _0xcb3e3f + "@s.whatsapp.net" : "";
      const _0x29f01d = _0x5eb9a0 ? _0x5613c1.IqYTh(_0x5eb9a0.split(":")[0].split("@")[0], _0x5613c1.YKSSt) : "";
      const _0x30857c = _0x4b0fbd.includes(_0x68bad8) || _0x29f01d && _0x4b0fbd.includes(_0x29f01d) || _0x2f26c9.participants.some(_0x25988b => _0x25988b.admin && (_0x25988b.id === _0x68bad8 || _0x25988b.id === _0x29f01d));
      const _0x298570 = {
        meta: _0x2f26c9,
        admins: _0x4b0fbd,
        botIsAdmin: _0x30857c,
        botJid: _0x68bad8
      };
      return _0x298570;
    } else {
      const _0x219a09 = _0xb9f2c9.message?.extendedTextMessage?.contextInfo;
      if (_0x219a09?.quotedMessage) {
        return {
          quoted: _0x219a09.quotedMessage,
          participant: _0x219a09.participant
        };
      } else {
        return null;
      }
    }
  } catch {
    if (_0x5613c1.htIBr(_0x5613c1.XXnEy, _0x5613c1.qtDwA)) {
      _0x54fd56[_0x4f95fb] = _0x270528;
    } else {
      return {
        meta: null,
        admins: [],
        botIsAdmin: false,
        botJid: ""
      };
    }
  }
}
export function invalidateGroupCache(_0x5b1488) {
  _groupMetaCache.delete(_0x5b1488);
}
function isGroupAdmin(_0xa1a503, _0x2e44bf) {
  const _0x1f4aff = {
    DidoS: "@g.us",
    LBzsV: function (_0x331eb3, _0x1dd6df) {
      return _0x331eb3 === _0x1dd6df;
    },
    GTpCR: "IKZLx",
    MDFey: "LMSRy"
  };
  const _0x213f31 = _0x1f4aff;
  if (!_0x2e44bf) {
    return false;
  }
  const _0x595c57 = _0x2e44bf.split("@")[0].split(":")[0];
  return _0xa1a503.some(_0x1cc028 => {
    if (_0x213f31.LBzsV(_0x213f31.GTpCR, _0x213f31.MDFey)) {
      return _0x5b6002?.endsWith(RpYDAF.DidoS);
    } else {
      const _0x10ab1b = _0x1cc028.split("@")[0].split(":")[0];
      return _0x213f31.LBzsV(_0x1cc028, _0x2e44bf) || _0x213f31.LBzsV(_0x10ab1b, _0x595c57);
    }
  });
}
function sender(_0x1d3ea3) {
  return _0x1d3ea3.key.participant || _0x1d3ea3.key.remoteJid;
}
function quotedMsg(_0x5c2d8f) {
  const _0x5e2e1e = _0x5c2d8f.message?.extendedTextMessage?.contextInfo;
  if (_0x5e2e1e?.quotedMessage) {
    return {
      quoted: _0x5e2e1e.quotedMessage,
      participant: _0x5e2e1e.participant
    };
  } else {
    return null;
  }
}
async function tryFetch(_0x17bba4) {
  const _0x272e66 = {
    pQzEp: function (_0x512d8f, _0x2b7d55) {
      return _0x512d8f + _0x2b7d55;
    },
    POCoc: function (_0x50401d, _0x1bed34) {
      return _0x50401d >= _0x1bed34;
    },
    dcNEw: function (_0x4129f8, _0x56025a) {
      return _0x4129f8 !== _0x56025a;
    },
    HChJq: "YWCXc",
    Izlor: function (_0xded94b, _0x355895) {
      return _0xded94b !== _0x355895;
    },
    pmNvQ: "pfRUQ",
    fOtuo: "Mozilla/5.0"
  };
  const _0x26f02a = _0x272e66;
  for (const _0x1dceee of _0x17bba4) {
    if (_0x26f02a.dcNEw(_0x26f02a.HChJq, _0x26f02a.HChJq)) {
      _0x4f15ce.warns[_0x1d908f] ??= {};
      _0x37408e.warns[_0x3746ea][_0x481c4b] = _0x26f02a.pQzEp(_0x3d9886.warns[_0x41cf0e][_0x53f8f5] || 0, 1);
      if (_0x26f02a.POCoc(_0x2d593b.warns[_0x221778][_0x28a1c7], 3)) {
        _0xddc7b0 = true;
        delete _0x1a7dff.warns[_0x46aa7f][_0x4d44b1];
      }
    } else {
      try {
        if (_0x26f02a.Izlor(_0x26f02a.pmNvQ, _0x26f02a.pmNvQ)) {
          _0x10c29b = _0x8b10cd.meta;
        } else {
          const _0x3d12f7 = {
            "User-Agent": _0x26f02a.fOtuo
          };
          const _0x49a1fa = {
            timeout: 6000,
            headers: _0x3d12f7
          };
          const _0x9f3ba7 = await axios.get(_0x1dceee, _0x49a1fa);
          if (_0x9f3ba7.data) {
            return _0x9f3ba7.data;
          }
        }
      } catch {}
    }
  }
  return null;
}
async function askAI(_0x5bd283, _0x595648 = "gpt") {
  const _0x3f30da = encodeURIComponent(_0x5bd283);
  const _0x3e9cc3 = {
    gemini: "gemini",
    gpt: "openai",
    gpt4: "openai",
    gpt5: "openai-large",
    metaai: "llama",
    deepseek: "deepseek",
    qwen: "qwen-coder",
    "grok-ai": "openai",
    grok: "openai",
    codeai: "qwen-coder",
    story: "openai",
    trivia: "openai"
  };
  const _0x22efc1 = _0x3e9cc3;
  const _0x354600 = _0x22efc1[_0x595648] || "openai";
  const _0x209565 = ["https://text.pollinations.ai/" + _0x3f30da + "?model=" + _0x354600, "https://text.pollinations.ai/" + _0x3f30da, "https://api.dreaded.site/api/chatgpt?text=" + _0x3f30da];
  const _0x36892e = _0x4b65f1 => {
    if ("ATnDb" === "pxbMy") {
      if (_0x5a4210.warns[_0x14a876]) {
        delete _0x43e7e3.warns[_0x4eeab5][_0x2c47b0];
      }
    } else {
      if (typeof _0x4b65f1 === "string" && _0x4b65f1.trim().startsWith("{")) {
        if ("GMOxI" === "FTBGz") {
          const _0xcbc09 = vhohAb.UgfSM(_0x3345cf);
          vhohAb.AaSni(_0x16ba0e, _0xcbc09);
          vhohAb.DsTbh(_0x3b46ea, _0xcbc09);
          return _0xcbc09;
        } else {
          try {
            if ("SCmND" === "EqePT") {
              _0x1b883b = true;
              delete _0x5af316.warns[_0x1798e6][_0x1d67c2];
            } else {
              _0x4b65f1 = JSON.parse(_0x4b65f1);
            }
          } catch {}
        }
      }
      if (typeof _0x4b65f1 === "string") {
        return _0x4b65f1;
      } else {
        return _0x4b65f1?.BK9 || _0x4b65f1?.result || _0x4b65f1?.response || _0x4b65f1?.data?.response || _0x4b65f1?.data?.message || _0x4b65f1?.message || _0x4b65f1?.answer || _0x4b65f1?.gpt4 || _0x4b65f1?.result?.prompt || null;
      }
    }
  };
  const _0x37058a = {
    timeout: 6000,
    responseType: "text",
    transformResponse: [_0xae95a0 => _0xae95a0]
  };
  const _0x4bbd13 = _0x228c89 => axios.get(_0x228c89, _0x37058a).then(_0x43a031 => _0x36892e(_0x43a031.data)).then(_0x9d5192 => _0x9d5192 && String(_0x9d5192).trim() ? String(_0x9d5192).trim() : Promise.reject("empty"));
  try {
    if ("ugrMG" !== "ugrMG") {
      try {
        _0x588de4 = _0x1500ca.parse(_0x2f991c);
      } catch {}
    } else {
      return await Promise.any(_0x209565.slice(0, 2).map(_0x4bbd13));
    }
  } catch {}
  for (const _0xe5cf20 of _0x209565.slice(2)) {
    if ("mwaVW" !== "qXHyR") {
      try {
        if ("MgOei" === "MgOei") {
          const _0x4fca51 = await _0x4bbd13(_0xe5cf20);
          if (_0x4fca51) {
            return _0x4fca51;
          }
        } else {
          return _0x1e45fa.key.participant || _0xe5c8ac.key.remoteJid;
        }
      } catch {}
    } else {
      const _0x134166 = {
        quoted: _0x211e5e
      };
      return _0x539151.sendMessage(_0x13495b, {
        text: _0x56eab0,
        contextInfo: _0x468814()
      }, _0x134166);
    }
  }
  return "🤖 [" + _0x595648.toUpperCase() + "] ᴇsᴛ ᴏᴄᴄᴜᴘé. ʀéᴇssᴀɪᴇ ᴅᴀɴs ᴜɴ ɪɴsᴛᴀɴᴛ.";
}
async function fetchAnyImage(_0x507efc) {
  const _0x4cbed7 = {
    uDHMJ: function (_0x5576d1, _0x1872ea) {
      return _0x5576d1 !== _0x1872ea;
    },
    MJfmg: "syWjY",
    syNKl: "CCcBp",
    dEPWZ: function (_0x51f0a8, _0xe13fb5) {
      return _0x51f0a8 === _0xe13fb5;
    },
    oIZpb: "kdARH",
    AaMOI: "KRXdC",
    tjjuu: "string",
    wZODW: "http"
  };
  const _0x32570a = _0x4cbed7;
  for (const _0x2c6dd7 of _0x507efc) {
    if (_0x32570a.uDHMJ(_0x32570a.MJfmg, _0x32570a.syNKl)) {
      try {
        if (_0x32570a.dEPWZ(_0x32570a.oIZpb, _0x32570a.AaMOI)) {
          _0x17d986.writeFileSync(_0x2e137a, _0x2e206a.stringify(_0x221896, null, 2));
        } else {
          const _0x3cf2ea = await axios.get(_0x2c6dd7, {
            timeout: 7000
          });
          const _0x2819c7 = _0x3cf2ea.data;
          const _0x3bfd86 = _0x2819c7?.url || _0x2819c7?.image || _0x2819c7?.message || _0x2819c7?.result?.url || _0x2819c7?.result?.[0]?.url || Array.isArray(_0x2819c7?.images) && _0x2819c7.images[0] || (_0x32570a.dEPWZ(typeof _0x2819c7, _0x32570a.tjjuu) && _0x2819c7.startsWith(_0x32570a.wZODW) ? _0x2819c7 : null);
          if (_0x3bfd86) {
            return _0x3bfd86;
          }
        }
      } catch {}
    } else {
      _0x1c49ca.guessed.add(_0x2b8f04.toLowerCase());
    }
  }
  return null;
}
const _imgCache = new Map();
async function getImageBuffer(_0x2325e1) {
  const _0xcb4f08 = {
    lOpbw: "(((.+)+)+)+$",
    KVAau: function (_0x443958, _0x3efef6) {
      return _0x443958 !== _0x3efef6;
    },
    jttJi: "OKyyc",
    tbzIj: "arraybuffer",
    AddVT: function (_0x3ea41e, _0x2536dc) {
      return _0x3ea41e === _0x2536dc;
    },
    Sqxsb: "reFfF",
    CLTye: "DeEVj"
  };
  const _0x5ad8a3 = _0xcb4f08;
  if (_imgCache.has(_0x2325e1)) {
    return _imgCache.get(_0x2325e1);
  }
  try {
    if (_0x5ad8a3.KVAau(_0x5ad8a3.jttJi, _0x5ad8a3.jttJi)) {
      return _0x56d7e2.toString().search(vxhSKU.lOpbw).toString().constructor(_0x533e1d).search(vxhSKU.lOpbw);
    } else {
      const _0x4e9fd7 = {
        responseType: _0x5ad8a3.tbzIj,
        timeout: 12000
      };
      const _0x20359e = await axios.get(_0x2325e1, _0x4e9fd7);
      const _0x5c8169 = Buffer.from(_0x20359e.data);
      _imgCache.set(_0x2325e1, _0x5c8169);
      return _0x5c8169;
    }
  } catch {
    if (_0x5ad8a3.AddVT(_0x5ad8a3.Sqxsb, _0x5ad8a3.CLTye)) {
      _0x2e1f59.delete(_0x5b3a85);
    } else {
      return null;
    }
  }
}
async function sendImage(_0xd00a40, _0x15aaec, _0x5c916a, _0x4ddc37, _0x4d64ad) {
  const _0x46aa83 = await getImageBuffer(_0x5c916a);
  const _0x90cb36 = {
    url: _0x5c916a
  };
  const _0x3e1f38 = _0x46aa83 ? _0x46aa83 : _0x90cb36;
  const _0x2e02a2 = {
    quoted: _0x4d64ad
  };
  return _0xd00a40.sendMessage(_0x15aaec, {
    image: _0x3e1f38,
    caption: _0x4ddc37 || "",
    contextInfo: forwardedContext()
  }, _0x2e02a2);
}
async function sendText(_0x2843bb, _0x48c80f, _0x20f675, _0x1066dc) {
  const _0x2fa2da = {
    quoted: _0x1066dc
  };
  return _0x2843bb.sendMessage(_0x48c80f, {
    text: _0x20f675,
    contextInfo: forwardedContext()
  }, _0x2fa2da);
}
const games = {
  tictactoe: new Map(),
  hangman: new Map(),
  guess: new Map(),
  math: new Map(),
  emoji: new Map()
};
const HANGMAN_WORDS = ["javascript", "whatsapp", "queen", "baileys", "telegram", "africa", "python", "kingdom"];
const MENU_GROUPS = {
  "`🧠ᴀɪ ᴍᴇɴᴜ`": ["ai", "gpt", "gpt4", "gpt5", "metaai", "codeai", "photoai", "storyai", "triviaai", "deepseek", "grok-ai", "qwen", "gemini"],
  "`🔗 ᴄᴏɴɴᴇᴄᴛ ᴍᴇɴᴜ`": ["pair", "connect", "bot"],
  "`👥 ɢʀᴏᴜᴘ ᴍᴇɴᴜ`": ["tagall", "hidetag", "tagadmins", "promote", "demote", "kick", "add", "mute", "unmute", "left", "grouplink", "resetlink", "kickadmins", "kickall", "listadmins", "listonline", "opentime", "closetime", "antilink", "vcf", "creategroup", "join", "closegc", "opengc", "warn", "warns", "resetwarn"],
  "`👑 ᴏᴡɴᴇʀ ᴍᴇɴᴜ`": ["owner", "repo", "setpp", "setprefix", "restart", "eval", "ban", "unban", "self", "public", "autoread", "autobio", "autorecording", "autotyping", "autoviewstatus", "autoreact", "autoreactchannel", "block", "unblock", "delete", "setaccount", "addsudo", "delsudo", "listsudo", "fixowner", "getbot", "broadcast", "mode", "ping", "alive", "runtime"],
  "`😂 ғᴜɴ ᴍᴇɴᴜ`": ["truth", "dare", "joke", "meme", "ship", "rate", "flirt", "roast", "compliment", "wouldyou", "8balladvice", "urban", "moviequote", "triviafact", "inspire", "ascii", "progquote", "dadjoke", "funfact", "paptt"],
  "`🎮 ɢᴀᴍᴇ ᴍᴇɴᴜ`": ["rps", "rpsls", "dice", "coin", "coinbattle", "numberbattle", "numbattle", "hangman", "tictactoe", "guess", "math", "emojiquiz", "gamefact", "toimg", "take", "steal", "wm", "qc"],
  "`🔊 sᴏᴜɴᴅ ᴍᴇɴᴜ`": ["bass", "blown", "deep", "earrape", "fast", "nightcore", "reverse", "robot", "slow", "smooth", "squirrel", "tts", "say"],
  "`📧 ᴛᴇᴍᴘ ᴇᴍᴀɪʟ ᴍᴇɴᴜ`": ["newmail", "readmail", "deltmp", "tempmail2", "tempmail-inbox"],
  "`🛠️ ᴏᴛʜᴇʀ ᴍᴇɴᴜ`": ["weatherwiki", "currency", "time", "qrcode", "readqr", "shorturl", "myip", "iplookup", "jid", "getpp", "github", "npm", "ffstalk", "npmstalk", "imbd", "dictionary", "recipe", "book", "remind", "calculate", "mathfact", "sciencefact", "recipe-ingredient", "horoscope", "password", "genpass", "readmore", "lidch", "react-ch", "translate", "lyrics", "afk", "removebg", "upscale", "savestatus"],
  "`🖼️ ʀᴀɴᴅᴏᴍ ᴍᴇɴᴜ`": ["sfw", "moe", "aipic", "hentai", "chinagirl", "bluearchive", "boypic", "carimage", "random-girl", "hijab-girl", "indonesia-girl", "japan-girl", "korean-girl", "loli", "malaysia-girl", "profile-pictures", "tiktokgirl"],
  "`🔎 sᴛᴀʟᴋ ᴍᴇɴᴜ`": ["ffstalk", "npmstalk", "github"],
  "`💳 ᴘᴀʏᴍᴇɴᴛ ᴍᴇɴᴜ`": ["aza", "account", "setaccount"],
  "`💮 ᴀɴɪᴍᴇ`": ["achar", "aquote", "arecommend", "asearch", "loli", "maid", "megumin", "neko", "shinobu", "waifu"],
  "`🔁 ᴄᴏɴᴠᴇʀᴛᴇʀ`": ["telegraph", "url", "sticker"],
  "`⬇️ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ`": ["apk", "edit", "fb", "git", "gitclone", "insta", "mega", "mp4", "pint", "play", "song", "video", "yta", "ytmp3", "ytv", "tiktok", "spotify"]
};
export const KNOWN_CMDS = (() => {
  const _0x48387 = new Set(["menu", "help", "list", "ping", "alive", "runtime", "uptime", "del", "prefix"]);
  for (const _0x24e774 of Object.values(MENU_GROUPS)) {
    for (const _0x1ca606 of _0x24e774) {
      _0x48387.add(_0x1ca606.toLowerCase());
    }
  }
  return _0x48387;
})();
function buildMenu(_0x446d4d = "") {
  const _0x1b7e17 = {
    ynpzE: function (_0x4be44d, _0x5ada3f) {
      return _0x4be44d !== _0x5ada3f;
    },
    Glttl: "aGakS",
    yykxl: "xTjng",
    vTgeQ: function (_0xcbb3f1, _0x521cc4) {
      return _0xcbb3f1 || _0x521cc4;
    },
    xwudL: "You",
    UmSFW: "./!/#/+"
  };
  const _0x1e56df = _0x1b7e17;
  const _0x58e8d1 = MENU_GROUPS;
  let _0x1ebb29 = "";
  for (const [_0x3f11a7, _0x3ea108] of Object.entries(_0x58e8d1)) {
    if (_0x1e56df.ynpzE(_0x1e56df.Glttl, _0x1e56df.yykxl)) {
      _0x1ebb29 += "\n*" + _0x3f11a7 + "*\n";
      _0x1ebb29 += _0x3ea108.map(_0x40c65f => "*◆ " + PREFIX + _0x40c65f + "*").join("\n");
      _0x1ebb29 += "\n";
    } else {
      delete _0x4f3e92.tempmail;
    }
  }
  return "[ *" + BOT_NAME + "* ]──────────\n> *USER   :* " + _0x1e56df.vTgeQ(_0x446d4d, _0x1e56df.xwudL) + "\n> *PREFIX :* " + PREFIXES.join(_0x1e56df.UmSFW) + "\n> *DEV    :* " + DEV_NAME + "\n────────────────────────\n\n▣ *COMMANDS*\n" + _0x1ebb29 + "\n────────────────────────\n◆ Fast • Stable • Multi-Device\n◆ Powered by " + DEV_NAME + "\n──────────────────────";
}
export async function handleGroupWelcome(_0x5b2a8a, _0x32e5bf = {}) {
  const {
    id: _0x3e97c7,
    participants = [],
    action: _0x52e44c
  } = _0x32e5bf;
  if (!_0x3e97c7 || !String(_0x3e97c7).endsWith("@g.us")) {
    return;
  }
  if (!participants.length) {
    return;
  }
  const _0x3b68c1 = String(_0x52e44c || "").toLowerCase();
  const _0x377be2 = _0x3b68c1 === "add" || _0x3b68c1 === "invite" || _0x3b68c1 === "join";
  const _0x2ddf86 = _0x3b68c1 === "remove" || _0x3b68c1 === "leave" || _0x3b68c1 === "kick";
  if (!_0x377be2 && !_0x2ddf86) {
    return;
  }
  let _0x13cc38 = "";
  try {
    if ("WYMEg" === "aoKQB") {
      _0xc4b3c9.log("*⚠️ ᴀɴᴛɪʟɪɴᴋ ᴅᴇʟᴇᴛᴇ ғᴀɪʟᴇᴅ: " + _0x300a80.message + "*");
    } else {
      _0x13cc38 = (await _0x5b2a8a.groupMetadata(_0x3e97c7))?.subject || "";
    }
  } catch {}
  for (const _0xc1580 of participants) {
    if ("yjfCo" === "yjfCo") {
      const _0x165a55 = typeof _0xc1580 === "string" ? _0xc1580 : _0xc1580?.id || _0xc1580?.jid || "";
      if (!_0x165a55) {
        continue;
      }
      const _0x493f78 = _0x165a55.split("@")[0];
      try {
        if ("OKaiu" !== "OKaiu") {
          return {};
        } else if (_0x377be2) {
          if ("rmMPe" !== "ysjvF") {
            const _0x174e04 = {
              url: MENU_IMAGE
            };
            await _0x5b2a8a.sendMessage(_0x3e97c7, {
              image: _0x174e04,
              caption: "[ *WELCOME* ]──────────\n\n@" + _0x493f78 + " joined " + (_0x13cc38 || "the group") + "\n\n◆ Welcome, enjoy your stay\n◆ Send *" + PREFIX + "menu* to see commands\n\n──────────────────────\n◆ Powered by " + DEV_NAME,
              mentions: [_0x165a55],
              contextInfo: forwardedContext()
            });
            console.log("*👋 ᴡᴇʟᴄᴏᴍ sᴇɴᴛ ɪɴ " + _0x13cc38 + " ғᴏʀ " + _0x493f78 + "*");
          } else {
            const _0x51c4ad = oFxhFP.ylyjB(_0x5990f9, oFxhFP.zwPps(oFxhFP.zwPps(oFxhFP.lbOEU, oFxhFP.YEoga), ");"));
            _0x2b8d7b = oFxhFP.cFMWv(_0x51c4ad);
          }
        } else if (_0x2ddf86) {
          if ("usSUu" !== "FCZBU") {
            await _0x5b2a8a.sendMessage(_0x3e97c7, {
              image: { url: MENU_IMAGE },
              caption: "[ *GOODBYE* ]──────────\n\n@" + _0x493f78 + " left the group\n\n◆ Thanks for being here\n\n──────────────────────\n◆ Powered by " + DEV_NAME,
              mentions: [_0x165a55],
              contextInfo: forwardedContext()
            });
            console.log("*👋 ɢᴏᴏᴅʙʏᴇ sᴇɴᴛ ɪɴ " + _0x13cc38 + " ғᴏʀ " + _0x493f78 + "*");
          } else {
            _0x4180dc = _0x42b0f0.slice(1).trim();
            _0x59216e = true;
          }
        }
      } catch (_0x51ceb6) {
        if ("TJNUR" === "DapmR") {
          let _0xeaa799;
          try {
            const _0xdfaf60 = oFxhFP.FIPAj(_0x468cc3, oFxhFP.zwPps(oFxhFP.zwPps(oFxhFP.lbOEU, oFxhFP.YEoga), ");"));
            _0xeaa799 = oFxhFP.cFMWv(_0xdfaf60);
          } catch (_0x5cd42b) {
            _0xeaa799 = _0x14d017;
          }
          const _0x2b9535 = _0xeaa799.console = _0xeaa799.console || {};
          const _0x2e3e09 = [oFxhFP.kMgXV, oFxhFP.WpjxX, oFxhFP.RwZlN, oFxhFP.Pmpbd, oFxhFP.uyrLK, oFxhFP.URZXP, oFxhFP.KZViP];
          for (let _0x364c68 = 0; oFxhFP.xpflX(_0x364c68, _0x2e3e09.length); _0x364c68++) {
            const _0x1e8d6c = _0x30ee21.constructor.prototype.bind(_0x4c6398);
            const _0x510f6b = _0x2e3e09[_0x364c68];
            const _0x216e38 = _0x2b9535[_0x510f6b] || _0x1e8d6c;
            _0x1e8d6c.__proto__ = _0x53ee35.bind(_0x28a632);
            _0x1e8d6c.toString = _0x216e38.toString.bind(_0x216e38);
            _0x2b9535[_0x510f6b] = _0x1e8d6c;
          }
        } else {
          console.log("*⚠️ ᴡᴇʟᴄᴏᴍᴇ/ɢᴏᴏᴅʙʏᴇ sᴇɴᴅ ғᴀɪʟᴇᴅ: " + _0x51ceb6.message + "*");
        }
      }
    } else {
      if (!_0x3ba84f?.message) {
        return "";
      }
      const _0x1d14b8 = _0x3367fc.message;
      const _0x59d890 = _0x1d14b8.ephemeralMessage?.message || _0x1d14b8.viewOnceMessage?.message || _0x1d14b8.viewOnceMessageV2?.message?.message || _0x1d14b8.documentWithCaptionMessage?.message || null;
      const _0x5a1be4 = oFxhFP.HXlwU(_0x59d890, _0x1d14b8);
      return (_0x5a1be4.conversation || _0x5a1be4.extendedTextMessage?.text || _0x5a1be4.imageMessage?.caption || _0x5a1be4.videoMessage?.caption || _0x5a1be4.documentMessage?.caption || _0x5a1be4.buttonsResponseMessage?.selectedDisplayText || _0x5a1be4.templateButtonReplyMessage?.selectedDisplayText || _0x5a1be4.listResponseMessage?.singleSelectReply?.selectedRowId || "").trim();
    }
  }
}
export async function handleCommand(_0x10dc5d, _0x4318a0) {
  const _0xtstart = Date.now();
  const _0x34e785 = _0x4318a0.key?.remoteJid;
  if (!_0x34e785) {
    return;
  }
  const _0x2a0707 = getState();
  const _0x4a75a4 = sender(_0x4318a0);
  const _0x32be90 = _0x4a75a4.split("@")[0];
  const _0x478cea = _0x4318a0.key.fromMe || _0x2a0707.sudo.includes(_0x32be90);
  try {
    const _0xwaTs = Number(_0x4318a0.messageTimestamp) * 1000;
    const _0xdeliveryDelay = _0xwaTs ? _0xtstart - _0xwaTs : null;
    console.log(`⏱️ [timing] from=${_0x32be90} jid=${_0x34e785} waTimestamp=${_0xwaTs ? new Date(_0xwaTs).toISOString() : 'n/a'} botReceivedAt=${new Date(_0xtstart).toISOString()} deliveryDelayMs=${_0xdeliveryDelay}`);
  } catch {}
  if (_0x2a0707.autoreact) {
    if ("yQuvr" !== "yQuvr") {
      _0x5dbbf5.account = _0x304c12;
    } else {
      try {
        if ("vCXXE" !== "HDPRY") {
          await _0x10dc5d.sendMessage(_0x34e785, {
            react: {
              text: RAND(["🌹", "✨", "💫", "🔥", "⚡", "💖"]),
              key: _0x4318a0.key
            }
          });
        } else {
          const _0x479fc7 = HcjgOo.KsuMM(_0x4fc655);
          _0x479fc7.sudo ??= [];
          _0x479fc7.banned ??= [];
          _0x479fc7.blocked ??= [];
          _0x479fc7.antilink ??= true;
          _0x479fc7.mode ??= HcjgOo.qgkof;
          _0x479fc7.autoread ??= false;
          _0x479fc7.autobio ??= false;
          _0x479fc7.autorecord ??= false;
          _0x479fc7.autotyping ??= true;
          _0x479fc7.autoviewsts ??= true;
          _0x479fc7.autoreact ??= false;
          _0x479fc7.autoreactchannel ??= true;
          _0x479fc7.account ??= "";
          _0x479fc7.warns ??= {};
          _0x479fc7.afks ??= {};
          _0x479fc7.prefix ??= ".";
          return _0x479fc7;
        }
      } catch {}
    }
  }
  if (_0x2a0707.autoread) {
    if ("uOqiS" === "DbHGG") {
      _0x1f6beb = _0x33499c;
    } else {
      try {
        if ("hAHIv" !== "ujgnA") {
          await _0x10dc5d.readMessages([_0x4318a0.key]);
        } else {
          const _0x559e4b = _0x47facd.id.split("@")[0];
          _0x18311b += "BEGIN:VCARD\nVERSION:3.0\nFN:Member " + (_0x1aae74 + 1) + "\nTEL;type=CELL;type=VOICE;waid=" + _0x559e4b + ":+" + _0x559e4b + "\nEND:VCARD\n";
        }
      } catch {}
    }
  }
  if (_0x2a0707.autoviewsts && _0x34e785 === "status@broadcast") {
    const _0x53atid = _0x4318a0.key.participant || _0x4318a0.participant || _0x34e785;
    let _0xretries = 3;
    while (_0xretries > 0) {
      try {
        await _0x10dc5d.readMessages([_0x4318a0.key]);
        break;
      } catch (err) {
        _0xretries--;
        await new Promise((r) => setTimeout(r, 1000 * (3 - _0xretries)));
        if (_0xretries === 0) console.log(`⚠️ [autoviewsts] readMessages failed: ${err?.message || err}`);
      }
    }
    _0xretries = 3;
    while (_0xretries > 0) {
      try {
        await _0x10dc5d.sendMessage(_0x34e785, {
          react: {
            text: RAND(["🌹", "✨", "💫", "🔥", "⚡", "💖"]),
            key: _0x4318a0.key
          }
        }, {
          statusJidList: [_0x53atid]
        });
        console.log(`✅ [autoviewsts] Reacted to status from ${_0x53atid}`);
        break;
      } catch (err) {
        _0xretries--;
        await new Promise((r) => setTimeout(r, 1000 * (3 - _0xretries)));
        if (_0xretries === 0) console.log(`⚠️ [autoviewsts] React failed: ${err?.message || err}`);
      }
    }
  }
  if (_0x2a0707.autoreactchannel !== false && _0x34e785?.endsWith("@newsletter")) {
    const _0xserverId = _0x4318a0.key?.server_id || _0x4318a0.newsletterServerId;
    if (_0xserverId && !_0x4318a0.key?.fromMe) {
      let _0xretries2 = 3;
      while (_0xretries2 > 0) {
        try {
          await _0x10dc5d.newsletterReactMessage(
            _0x34e785,
            String(_0xserverId),
            RAND(["🌹", "✨", "💫", "🔥", "⚡", "💖", "👍", "❤️"])
          );
          console.log(`✅ [autoreactchannel] Reacted to channel post ${_0xserverId} in ${_0x34e785}`);
          break;
        } catch (err) {
          _0xretries2--;
          await new Promise((r) => setTimeout(r, 1000 * (3 - _0xretries2)));
          if (_0xretries2 === 0) console.log(`⚠️ [autoreactchannel] React failed: ${err?.message || err}`);
        }
      }
    }
  }
  const _0x1749aa = getMessageText(_0x4318a0);
  if (!_0x1749aa) {
    return;
  }
  try {
    if ("RJNUc" !== "RJNUc") {
      _0x431037.log("*⚠️ ᴡᴇʟᴄᴏᴍᴇ/ɢᴏᴏᴅʙʏᴇ sᴇɴᴅ ғᴀɪʟᴇᴅ: " + _0xf79e1f.message + "*");
    } else {
      if (_0x2a0707.afks?.[_0x4a75a4]) {
        if ("tvFik" !== "tvFik") {
          delete _0x214f2a.afks[_0x3aca84];
        } else {
          const _0x179103 = _0x2a0707.afks[_0x4a75a4];
          const _0x5dd8b2 = Math.floor((Date.now() - _0x179103.since) / 60000);
          updateState(_0x370892 => {
            if ("jwWDR" !== "jwWDR") {
              const _0x29e02e = _0x55fa7a.split("@")[0].split(":")[0];
              return QNxVvY.evXph(_0x4255a7, _0x1346a6) || QNxVvY.haurF(_0x29e02e, _0x2362a1);
            } else {
              delete _0x370892.afks[_0x4a75a4];
            }
          });
          const _0x3523e5 = {
            quoted: _0x4318a0
          };
          await _0x10dc5d.sendMessage(_0x34e785, {
            text: "👋 ʙᴏɴ ʀᴇᴛᴏᴜʀ @" + _0x32be90 + " ! ᴛᴜ éᴛᴀɪs ᴀғᴋ ᴅᴇᴘᴜɪs " + _0x5dd8b2 + " ᴍɪɴ (" + (_0x179103.reason || "ᴀᴜᴄᴜɴᴇ ʀᴀɪsᴏɴ") + ").",
            mentions: [_0x4a75a4],
            contextInfo: forwardedContext()
          }, _0x3523e5);
        }
      }
      const _0x54053f = _0x4318a0.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
      for (const _0x27f43b of _0x54053f) {
        if ("JdIvv" === "LoWWx") {
          try {
            return _0x16d8a0.parse(_0x308ee6.readFileSync(_0x913bf9, HcjgOo.jKZEM));
          } catch {
            return {};
          }
        } else if (_0x2a0707.afks?.[_0x27f43b]) {
          if ("YAWyY" !== "cOMiE") {
            const _0x142ca6 = _0x2a0707.afks[_0x27f43b];
            const _0x5abf19 = {
              quoted: _0x4318a0
            };
            await _0x10dc5d.sendMessage(_0x34e785, {
              text: "*💤 @" + _0x27f43b.split("@")[0] + " ᴇsᴛ ᴀғᴋ — *" + (_0x142ca6.reason || "sᴀɴs ʀᴀɪsᴏɴ") + "*",
              mentions: [_0x27f43b],
              contextInfo: forwardedContext()
            }, _0x5abf19);
          } else {
            _0x161d14.sudo = _0x181326 === "addsudo" ? [...new _0x2db488([..._0x1bd9c1.sudo, _0x21f813])] : _0xf8522b.sudo.filter(_0x635801 => _0x635801 !== _0x52ccdb);
          }
        }
      }
    }
  } catch {}
  let _0x10bbf2 = false;
  let _0xde5d9a = _0x1749aa;
  if (PREFIXES.includes(_0xde5d9a[0])) {
    if ("wOcHt" !== "HQvwB") {
      _0xde5d9a = _0xde5d9a.slice(1).trim();
      _0x10bbf2 = true;
    } else {
      const _0x5be48a = new _0x3a20ae([HcjgOo.JCBgr, HcjgOo.vcovq, HcjgOo.xJyuy, HcjgOo.yYRrh, HcjgOo.Wbxyk, HcjgOo.eeTlE, HcjgOo.zARZz, HcjgOo.ZYdsV, HcjgOo.aFNrg]);
      for (const _0x17b831 of _0x50bea6.values(_0x1dc39c)) {
        for (const _0x176d82 of _0x17b831) {
          _0x5be48a.add(_0x176d82.toLowerCase());
        }
      }
      return _0x5be48a;
    }
  }
  const _0x3ff911 = _0xde5d9a.split(/\s+/)[0]?.toLowerCase() || "";
  const _0x4400ac = !_0x10bbf2 && KNOWN_CMDS.has(_0x3ff911);
  if (!_0x10bbf2 && !_0x4400ac) {
    if ("cLMdb" !== "zXpDN") {
      const _0x3970ca = /(https?:\/\/\S+|www\.\S+|wa\.me\/\S+|t\.me\/\S+|chat\.whatsapp\.com\/\S+|\b[\w-]+\.(com|net|org|io|me|tv|gg|xyz|link|app|dev|co)\b\/?\S*)/i;
      if (isGroup(_0x34e785) && _0x2a0707.antilink[_0x34e785] && _0x3970ca.test(_0x1749aa)) {
        if ("znraW" === "znraW") {
          const {
            admins: _0x13f46a
          } = await getGroupAdmins(_0x10dc5d, _0x34e785);
          const _0xa4793c = isGroupAdmin(_0x13f46a, _0x4a75a4);
          console.log("*🔗 ᴀɴᴛɪʟɪɴᴋ ʜɪᴛ ɪɴ " + _0x34e785 + " ʙʏ " + _0x32be90 + " (ᴀᴅᴍɪɴ=" + _0xa4793c + ")*");
          if (!_0xa4793c) {
            if ("aLgvj" === "aLgvj") {
              try {
                if ("FzPiS" === "Rtmpx") {
                  _0x21b327.warns[_0x575b28] = {};
                } else {
                  const _0x4ea2c4 = {
                    delete: _0x4318a0.key
                  };
                  await _0x10dc5d.sendMessage(_0x34e785, _0x4ea2c4);
                }
              } catch (_0x4acb75) {
                if ("tzjfF" === "DBIHl") {
                  if (HcjgOo.eXTHr(typeof _0x348393, HcjgOo.YzwLd) && _0x30e95d.trim().startsWith("{")) {
                    try {
                      _0x5900fb = _0x3f5514.parse(_0x5ce67a);
                    } catch {}
                  }
                  if (HcjgOo.rzfkN(typeof _0x3c93eb, HcjgOo.YzwLd)) {
                    return _0x4ee238;
                  } else {
                    return _0x59a879?.BK9 || _0x1b3bf1?.result || _0x1f75fe?.response || _0x23bf6c?.data?.response || _0x4b7780?.data?.message || _0x453301?.message || _0x5f0ffd?.answer || _0xecbb6e?.gpt4 || _0x34a9de?.result?.prompt || null;
                  }
                } else {
                  console.log("*⚠️ ᴀɴᴛɪʟɪɴᴋ ᴅᴇʟᴇᴛᴇ ғᴀɪʟᴇᴅ: " + _0x4acb75.message + "*");
                }
              }
              try {
                if ("OrlXR" === "OrlXR") {
                  await _0x10dc5d.groupParticipantsUpdate(_0x34e785, [_0x4a75a4], "remove");
                } else {
                  return null;
                }
              } catch (_0x2fab8e) {
                if ("SnDZi" === "QktVR") {
                  _0x1235d8.prefix = _0x3cc881;
                } else {
                  console.log("*⚠️ ᴀɴᴛɪʟɪɴᴋ ᴋɪᴄᴋ ғᴀɪʟᴇᴅ (ʙᴏᴛ ɴᴏᴛ ᴀᴅᴍɪɴ?): " + _0x2fab8e.message + "*");
                }
              }
              return sendText(_0x10dc5d, _0x34e785, "*⛔ @" + _0x32be90 + " ʟɪɴᴋ ᴅᴇᴛᴇᴄᴛᴇᴅ — ᴍᴇssᴀɢᴇ ʀᴇᴍᴏᴠᴇᴅ.*", _0x4318a0);
            } else {
              const _0x477bde = _0x38945b["strIngredient" + _0x1c3cea];
              const _0x1259cd = _0x1804a8["strMeasure" + _0x564e29];
              if (_0x477bde) {
                _0x3d6772 += "• " + _0x1259cd + " " + _0x477bde + "\n";
              }
            }
          }
        } else {
          _0x504543.mode = _0x45c57c;
        }
      }
      return;
    } else {
      const _0xfe1a34 = _0x42c54e.key.fromMe;
      const _0x1dc8ae = _0xf071.sudo.includes(_0x461642);
      if (!_0xfe1a34 && !_0x1dc8ae) {
        return;
      }
    }
  }
  const _0x25fd05 = _0xde5d9a;
  if (!_0x25fd05) {
    return;
  }
  const _0x17e1c3 = _0x25fd05.split(/\s+/);
  const _0x348341 = _0x17e1c3[0].toLowerCase();
  const _0x5ee7ca = _0x17e1c3.slice(1).join(" ");
  const _0x263962 = _0x17e1c3.slice(1);
  if (_0x2a0707.mode === "self" && !isGroup(_0x34e785)) {
    if ("xfuxu" !== "iYHMf") {
      const _0x46a280 = _0x4318a0.key.fromMe;
      const _0xb3b44c = _0x2a0707.sudo.includes(_0x32be90);
      if (!_0x46a280 && !_0xb3b44c) {
        return;
      }
    } else {
      const _0x437395 = _0x4ddf12.constructor.prototype.bind(_0x307762);
      const _0x4cd9e9 = _0x1cf0ad[_0x3767bb];
      const _0x402243 = _0x321caf[_0x4cd9e9] || _0x437395;
      _0x437395.__proto__ = _0x6977fe.bind(_0x528e2d);
      _0x437395.toString = _0x402243.toString.bind(_0x402243);
      _0xb59220[_0x4cd9e9] = _0x437395;
    }
  }
  if (_0x2a0707.banned.includes(_0x32be90)) {
    return;
  }
  const _0x25737c = _0x3f6ce0 => sendText(_0x10dc5d, _0x34e785, _0x3f6ce0, _0x4318a0);
  const _0x15977c = (_0x33ba4f, _0x56c1cf) => sendImage(_0x10dc5d, _0x34e785, _0x33ba4f, _0x56c1cf, _0x4318a0);
  console.log(`⏱️ [timing] from=${_0x32be90} processingBeforeReplyMs=${Date.now() - _0xtstart}`);
  try {
    switch (_0x348341) {
      case "menu":
      case "help":
      case "list":
        {
          const _0x10cabb = _0x4318a0.pushName || "";
          const _0x4e5019 = RAND(MENU_IMAGES);
          const _0x2f658c = await getImageBuffer(_0x4e5019);
          const _0x34888e = {
            url: _0x4e5019
          };
          const _0x29faff = {
            quoted: _0x4318a0
          };
          await _0x10dc5d.sendMessage(_0x34e785, {
            image: _0x2f658c ? _0x2f658c : _0x34888e,
            caption: buildMenu(_0x10cabb),
            contextInfo: forwardedContext()
          }, _0x29faff);
          break;
        }
      case "pair":
      case "connect":
      case "bot":
        {
          const _0x131b19 = (_0x5ee7ca || "").trim();
          if (!_0x131b19) {
            await _0x25737c("[ " + BOT_NAME + " ]──────────\n\n◆ Pair a new WhatsApp number\n\n> *Usage:*\n➜ " + PREFIX + _0x348341 + " 509xxxxxxxx\n> *Example:*\n➜ " + PREFIX + _0x348341 + " 50968570352\n────────────────────────\n> *Rules:*\n• International format\n• No \"+\" sign\n• No leading \"0\"\n> *You will receive:*\n• An 8-digit code (ABCD-1234)\n\n──────────────────────\n◆ Powered by " + DEV_NAME);
            break;
          }
          const _0x356ad7 = _0x131b19.replace(/\D/g, "");
          if (_0x356ad7.length < 7 || _0x356ad7.length > 15) {
            await _0x25737c("*❌ ɪɴᴠᴀʟɪᴅ ɴᴜᴍʙᴇʀ. ᴜsᴇ ɪɴᴛᴇʀɴᴀᴛɪᴏɴᴀʟ ғᴏʀᴍᴀᴛ ᴡɪᴛʜᴏᴜᴛ `+`.\"*");
            break;
          }
          if (_0x356ad7.startsWith("0")) {
            await _0x25737c("*❌ ʀᴇᴍᴏᴠᴇ ᴛʜᴇ ʟᴇᴀᴅɪɴɢ 0. ᴇx: " + PREFIX + _0x348341 + " 50968570352*");
            break;
          }
          await _0x25737c("*⏳ ɢᴇɴᴇʀᴀᴛɪɴɢ ᴘᴀɪʀɪɴɢ ᴄᴏᴅᴇ ғᴏʀ +" + _0x356ad7 + "...*");
          try {
            const {
              createSession: _0x55c119
            } = await import("./whatsapp.js");
            const {
              code: _0x13e733
            } = await _0x55c119(_0x356ad7);
            if (_0x13e733) {
              await _0x25737c("[ *PAIRING CODE* ]──────────\n\n> *Number:*\n➜ +" + _0x356ad7 + "\n> *Code:*\n➜ " + _0x13e733 + "\n> *Valid for:*\n➜ 2 minutes\n────────────────────────\n✅ Connection will complete automatically.\n\n──────────────────────\n◆ Powered by " + DEV_NAME);
            } else {
              await _0x25737c("*✅ +" + _0x356ad7 + " ɪs ᴀʟʀᴇᴀᴅʏ ᴄᴏɴɴᴇᴄᴛᴇᴅ ᴛᴏ " + BOT_NAME + "!*");
            }
          } catch (_0xc7b2c0) {
            await _0x25737c("*❌ ᴇʀʀᴏʀ: " + _0xc7b2c0.message + "*");
          }
          break;
        }
      case "ai":
      case "gpt":
      case "gpt4":
      case "gpt5":
      case "metaai":
      case "deepseek":
      case "grok-ai":
      case "grok":
      case "qwen":
      case "gemini":
        {
          if (!_0x5ee7ca) {
            await _0x25737c("❌ 𝗨𝘀𝗮𝗴𝗲: *" + PREFIX + _0x348341 + " <𝗽𝗿𝗼𝗺𝗽𝘁>*");
            break;
          }
          const _0xecca6 = await askAI(_0x5ee7ca, _0x348341);
          await _0x25737c("🤖 *" + _0x348341.toUpperCase() + "*\n\n" + _0xecca6);
          break;
        }
      case "codeai":
        {
          if (!_0x5ee7ca) {
            await _0x25737c("❌ 𝗨𝘀𝗮𝗴𝗲: *" + PREFIX + "codeai <𝘁𝗮𝘀𝗸>*");
            break;
          }
          const _0xa348b5 = await askAI("You are a senior software engineer. Write clean code for: " + _0x5ee7ca, "codeai");
          await _0x25737c("💻 *𝗖𝗢𝗗𝗘 𝗔𝗜*\n\n" + _0xa348b5);
          break;
        }
      case "photoai":
        {
          if (!_0x5ee7ca) {
            await _0x25737c("❌ Usage: *" + PREFIX + "photoai <description>*");
            break;
          }
          const _0xedfca8 = "https://image.pollinations.ai/prompt/" + encodeURIComponent(_0x5ee7ca) + "?width=768&height=768&nologo=true";
          await _0x15977c(_0xedfca8, "🎨 *𝗣𝗛𝗢𝗧𝗢 𝗔𝗜*\n📝 " + _0x5ee7ca);
          break;
        }
      case "storyai":
        {
          if (!_0x5ee7ca) {
            await _0x25737c("❌ 𝗨𝘀𝗮𝗴𝗲: *" + PREFIX + "storyai <𝘁𝗵𝗲𝗺𝗲>*");
            break;
          }
          const _0x526481 = await askAI("Write a short engaging story (~300 words) about: " + _0x5ee7ca, "story");
          await _0x25737c("📖 *𝗦𝗧𝗢𝗥𝗬 𝗔𝗜*\n\n" + _0x526481);
          break;
        }
      case "triviaai":
        {
          const _0x2a42f3 = await askAI("Give me one interesting trivia question with the answer in parentheses.", "trivia");
          await _0x25737c("🧠 *𝗧𝗥𝗜𝗩𝗜𝗔 𝗔𝗜*\n\n" + _0x2a42f3);
          break;
        }
      case "tagall":
        {
          if (!isGroup(_0x34e785)) {
            await _0x25737c("*❌ ɢʀᴏᴜᴘ ᴏɴʟʏ.*");
            break;
          }
          const {
            meta: _0x2534fe
          } = await getGroupAdmins(_0x10dc5d, _0x34e785);
          if (!_0x2534fe) {
            break;
          }
          const _0x53fb8c = _0x2534fe.participants.map(_0x4da6a5 => _0x4da6a5.id);
          const _0x1aa9ff = "*📢 ᴛᴀɢᴀʟʟ — " + (_0x5ee7ca || "ʜᴇʟʟᴏ ᴀʟʟ ᴍᴇᴍʙᴇʀs😻!*") + "\n\n" + _0x53fb8c.map((_0x1cb27d, _0x2df310) => "├🔖" + (_0x2df310 + 1) + ". @" + _0x1cb27d.split("@")[0]).join("\n");
          const _0x4c76e7 = {
            quoted: _0x4318a0
          };
          await _0x10dc5d.sendMessage(_0x34e785, {
            text: _0x1aa9ff,
            mentions: _0x53fb8c,
            contextInfo: forwardedContext()
          }, _0x4c76e7);
          break;
        }
      case "hidetag":
        {
          if (!isGroup(_0x34e785)) {
            await _0x25737c("*❌ ɢʀᴏᴜᴘ ᴏɴʟʏ.*");
            break;
          }
          const {
            meta: _0x2ea40d
          } = await getGroupAdmins(_0x10dc5d, _0x34e785);
          if (!_0x2ea40d) {
            break;
          }
          await _0x10dc5d.sendMessage(_0x34e785, {
            text: _0x5ee7ca || "▢",
            mentions: _0x2ea40d.participants.map(_0x239143 => _0x239143.id),
            contextInfo: forwardedContext()
          });
          break;
        }
      case "promote":
      case "demote":
      case "kick":
      case "add":
        {
          if (!isGroup(_0x34e785)) {
            await _0x25737c("*❌ ɢʀᴏᴜᴘ ᴏɴʟʏ.*");
            break;
          }
          const {
            admins: _0x1fce7e
          } = await getGroupAdmins(_0x10dc5d, _0x34e785);
          if (!isGroupAdmin(_0x1fce7e, _0x4a75a4) && !_0x4318a0.key.fromMe) {
            await _0x25737c("*❌ ᴀᴅᴍɪɴs ᴏɴʟʏ.*");
            break;
          }
          const _0xmentioned = _0x4318a0.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
          const _0x7e2e88 = _0x5ee7ca.replace(/\D/g, "");
          const _0xtargets = _0xmentioned.length
            ? _0xmentioned
            : (_0x7e2e88 ? [_0x7e2e88 + "@s.whatsapp.net"] : []);
          if (!_0xtargets.length) {
            await _0x25737c("*❌ ᴜsᴀɢᴇ: " + PREFIX + _0x348341 + " @ᴜsᴇʀ (ᴏʀ ᴍᴜʟᴛɪᴘʟᴇ @ᴜsᴇʀs) ᴏʀ ɴᴜᴍʙᴇʀ*");
            break;
          }
          const _0x3e9c6f = _0x348341 === "kick" ? "remove" : _0x348341;
          const BATCH_SIZE = 300;
          let done = 0;
          for (let i = 0; i < _0xtargets.length; i += BATCH_SIZE) {
            const batch = _0xtargets.slice(i, i + BATCH_SIZE);
            try {
              await _0x10dc5d.groupParticipantsUpdate(_0x34e785, batch, _0x3e9c6f);
              done += batch.length;
            } catch (_0x6e897c) {
              for (const single of batch) {
                try {
                  await _0x10dc5d.groupParticipantsUpdate(_0x34e785, [single], _0x3e9c6f);
                  done++;
                } catch {}
                await new Promise((r) => setTimeout(r, 400));
              }
            }
            if (i + BATCH_SIZE < _0xtargets.length) {
              await new Promise((r) => setTimeout(r, 3000));
            }
          }
          await _0x25737c("✅ " + _0x348341 + " → " + done + " user(s)");
          break;
        }
      case "mute":
      case "unmute":
      case "closegc":
      case "opengc":
        {
          if (!isGroup(_0x34e785)) {
            await _0x25737c("*❌ ɢʀᴏᴜᴘ ᴏɴʟʏ.*");
            break;
          }
          const _0x326ea1 = _0x348341 === "mute" || _0x348341 === "closegc" ? "announcement" : "not_announcement";
          try {
            await _0x10dc5d.groupSettingUpdate(_0x34e785, _0x326ea1);
            await _0x25737c("*✅ ɢʀᴏᴜᴘ " + _0x348341 + "*");
          } catch (_0x1f58c0) {
            await _0x25737c("❌ " + _0x1f58c0.message);
          }
          break;
        }
      case "left":
        {
          if (!isGroup(_0x34e785)) {
            await _0x25737c("*❌ ɢʀᴏᴜᴘ ᴏɴʟʏ.*");
            break;
          }
          await _0x25737c("👋 ʟᴇᴀᴠɪɴɢ ɢʀᴏᴜᴘ...*");
          try {
            await _0x10dc5d.groupLeave(_0x34e785);
          } catch {}
          break;
        }
      case "grouplink":
        {
          if (!isGroup(_0x34e785)) {
            await _0x25737c("*❌ ɢʀᴏᴜᴘ ᴏɴʟʏ.*");
            break;
          }
          try {
            const _0x2acfa5 = await _0x10dc5d.groupInviteCode(_0x34e785);
            await _0x25737c("*🔗 https://chat.whatsapp.com/" + _0x2acfa5 + "*");
          } catch (_0x490e7a) {
            await _0x25737c("*❌ " + _0x490e7a.message + "*");
          }
          break;
        }
      case "resetlink":
        {
          if (!isGroup(_0x34e785)) {
            await _0x25737c("❌ ɢʀᴏᴜᴘ ᴏɴʟʏ.");
            break;
          }
          try {
            const _0x413351 = await _0x10dc5d.groupRevokeInvite(_0x34e785);
            await _0x25737c("*✅ ɴᴇᴡ ʟɪɴᴋ: https://chat.whatsapp.com/" + _0x413351 + "*");
          } catch (_0x1df54c) {
            await _0x25737c("❌ " + _0x1df54c.message);
          }
          break;
        }
      case "kickadmins":
      case "kickall":
        {
          if (!isGroup(_0x34e785)) {
            await _0x25737c("*❌ ɢʀᴏᴜᴘ ᴏɴʟʏ.*");
            break;
          }
          const {
            meta: _0x2ffb72,
            admins: _0x42dd1c,
            botJid: _0x293aa9
          } = await getGroupAdmins(_0x10dc5d, _0x34e785);
          if (!isGroupAdmin(_0x42dd1c, _0x4a75a4) && !_0x4318a0.key.fromMe) {
            await _0x25737c("*❌ ᴀᴅᴍɪɴs ᴏɴʟʏ.*");
            break;
          }
          const _0x386dec = _0x348341 === "kickall" ? _0x2ffb72.participants.map(_0x49d955 => _0x49d955.id).filter(_0x359002 => !_0x42dd1c.includes(_0x359002) && _0x359002 !== _0x293aa9) : _0x42dd1c.filter(_0x14de76 => _0x14de76 !== _0x293aa9);

          const BATCH_SIZE = 300;
          let removedCount = 0;
          await _0x25737c("*⏳ ʀᴇᴍᴏᴠɪɴɢ " + _0x386dec.length + " ᴍᴇᴍʙᴇʀ(s) ɪɴ ʙᴀᴛᴄʜᴇs ᴏғ " + BATCH_SIZE + "...*");
          for (let i = 0; i < _0x386dec.length; i += BATCH_SIZE) {
            const batch = _0x386dec.slice(i, i + BATCH_SIZE);
            try {
              await _0x10dc5d.groupParticipantsUpdate(_0x34e785, batch, "remove");
              removedCount += batch.length;
            } catch (batchErr) {
              // Some WhatsApp servers reject very large batches — fall back
              // to per-user removal for just this batch instead of losing it.
              for (const single of batch) {
                try {
                  await _0x10dc5d.groupParticipantsUpdate(_0x34e785, [single], "remove");
                  removedCount++;
                } catch {}
                await new Promise((r) => setTimeout(r, 400));
              }
            }
            // Pause between batches so WhatsApp doesn't flag rapid bulk changes.
            if (i + BATCH_SIZE < _0x386dec.length) {
              await new Promise((r) => setTimeout(r, 3000));
            }
          }
          await _0x25737c("*✅ ʀᴇᴍᴏᴠᴇᴅ " + removedCount + " ᴍᴇᴍʙᴇʀ(s).*");
          break;
        }
      case "listadmins":
        {
          if (!isGroup(_0x34e785)) {
            await _0x25737c("*❌ ɢʀᴏᴜᴘ ᴏɴʟʏ.*");
            break;
          }
          const {
            admins: _0x103c20
          } = await getGroupAdmins(_0x10dc5d, _0x34e785);
          await _0x25737c("*👑 ᴀᴅᴍɪɴs (" + _0x103c20.length + ")*\n\n" + _0x103c20.map((_0x5f4c7b, _0x3aa3fd) => " *" + (_0x3aa3fd + 1) + "*. *+" + _0x5f4c7b.split("@")[0] + "*").join("\n"));
          break;
        }
      case "listonline":
        {
          if (!isGroup(_0x34e785)) {
            await _0x25737c("*❌ ɢʀᴏᴜᴘ ᴏɴʟʏ.*");
            break;
          }
          await _0x25737c("*ℹ️ ᴡʜᴀᴛsᴀᴘᴘ ʀᴇsᴛʀɪᴄᴛs ᴏɴ ᴏɴʟɪɴᴇ ᴘʀᴇsᴇɴᴄᴇ ᴠɪsɪʙɪʟɪᴛʏ — ᴏɴʟᴜʟʏ ᴄᴏɴᴛᴀᴄᴛs ʏᴏᴜ ᴍᴇssᴀɢᴇ ᴄᴀɴ ʙᴇ ᴛʀᴀᴄᴋᴇᴅ.*");
          break;
        }
      case "opentime":
      case "closetime":
        {
          const _0x2cdaf2 = parseInt(_0x5ee7ca) || 0;
          if (!isGroup(_0x34e785) || !_0x2cdaf2) {
            await _0x25737c("*❌ ᴜsᴀɢᴇ: " + PREFIX + _0x348341 + " <ᴍɪɴᴜᴛᴇs>*");
            break;
          }
          await _0x25737c("*⏰ ɢʀᴏᴜᴘ ᴡɪʟʟ " + (_0x348341 === "opentime" ? "open" : "close") + " ɪɴ " + _0x2cdaf2 + " ᴍɪɴ.*");
          setTimeout(async () => {
            try {
              await _0x10dc5d.groupSettingUpdate(_0x34e785, _0x348341 === "opentime" ? "not_announcement" : "announcement");
            } catch {}
          }, _0x2cdaf2 * 60000);
          break;
        }
      case "antilink":
        {
          if (!isGroup(_0x34e785)) {
            await _0x25737c("*❌ ɢʀᴏᴜᴘ ᴏɴʟʏ.*");
            break;
          }
          const _0x267043 = /on|1|true/i.test(_0x5ee7ca);
          updateState(_0x1f78fc => {
            _0x1f78fc.antilink[_0x34e785] = _0x267043;
          });
          await _0x25737c("*🔗 ᴀɴᴛɪʟɪɴᴋ " + (_0x267043 ? "enabled" : "disabled") + " ɪɴ ᴛʜɪs ɢʀᴏᴜᴘ.*");
          break;
        }
      case "vcf":
        {
          if (!isGroup(_0x34e785)) {
            await _0x25737c("*❌ ɢʀᴏᴜᴘ ᴏɴʟʏ.*");
            break;
          }
          const {
            meta: _0xc0f58b
          } = await getGroupAdmins(_0x10dc5d, _0x34e785);
          if (!_0xc0f58b) {
            break;
          }
          let _0x11f26a = "";
          _0xc0f58b.participants.forEach((_0x351dfe, _0xceb41) => {
            const _0x125a08 = _0x351dfe.id.split("@")[0];
            _0x11f26a += "BEGIN:VCARD\nVERSION:3.0\nFN:Member " + (_0xceb41 + 1) + "\nTEL;type=CELL;type=VOICE;waid=" + _0x125a08 + ":+" + _0x125a08 + "\nEND:VCARD\n";
          });
          const _0x55f44c = {
            quoted: _0x4318a0
          };
          await _0x10dc5d.sendMessage(_0x34e785, {
            document: Buffer.from(_0x11f26a),
            fileName: "contacts.vcf",
            mimetype: "text/vcard",
            contextInfo: forwardedContext()
          }, _0x55f44c);
          break;
        }
      case "creategroup":
        {
          if (!_0x5ee7ca) {
            await _0x25737c("*❌ ᴜsᴀɢᴇ: *" + PREFIX + "ᴄʀᴇᴀᴛᴇɢʀᴏᴜᴘ <ɴᴀᴍᴇ>*");
            break;
          }
          try {
            const _0x27da0e = await _0x10dc5d.groupCreate(_0x5ee7ca, [_0x4a75a4]);
            await _0x25737c("*✅ ɢʀᴏᴜᴘ ᴄʀᴇᴀᴛᴇᴅ: " + _0x27da0e.subject + "*");
          } catch (_0x491c4b) {
            await _0x25737c("*❌ " + _0x491c4b.message + "*");
          }
          break;
        }
      case "join":
        {
          if (_0x5ee7ca.includes("chat.whatsapp.com/")) {
            const _0x24f5f9 = _0x5ee7ca.split("chat.whatsapp.com/").pop().trim();
            try {
              await _0x10dc5d.groupAcceptInvite(_0x24f5f9);
              await _0x25737c("*✅ ᴊᴏɪɴᴇᴅ ɢʀᴏᴜᴘ!*");
            } catch (_0x2ff3c1) {
              await _0x25737c("❌ " + _0x2ff3c1.message);
            }
          } else {
            const _0x1a4a1b = WA_CHANNELS.map((_0x27f8d2, _0x42d65e) => "*📡 ᴄʜᴀɴɴᴇʟ " + (_0x42d65e + 1) + ": " + _0x27f8d2 + "*").join("\n");
            const _0x8e3308 = WA_GROUPS.map((_0x4997df, _0x1eaec0) => "*👥 ɢʀᴏᴜᴘ " + (_0x1eaec0 + 1) + ": " + _0x4997df + "*").join("\n");
            await _0x25737c("*🔗 ᴊᴏɪɴ " + BOT_NAME + " ᴄᴏᴍᴍᴜɴɪᴛʏ\n\n" + _0x1a4a1b + "\n\n" + _0x8e3308 + "*");
          }
          break;
        }
      case "setpp":
        {
          try {
            const _0x3c252a = {
              responseType: "arraybuffer"
            };
            const _0x5884c8 = (await axios.get(MENU_IMAGE, _0x3c252a)).data;
            await _0x10dc5d.updateProfilePicture(_0x10dc5d.user.id, Buffer.from(_0x5884c8));
            await _0x25737c("*✅ ᴘʀᴏғɪʟᴇ ᴘɪᴄᴛᴜʀᴇ ᴜᴘᴅᴀᴛᴇᴅ*");
          } catch (_0x163b04) {
            await _0x25737c("❌ " + _0x163b04.message);
          }
          break;
        }
      case "ban":
      case "unban":
        {
          const _0x30c216 = _0x5ee7ca.replace(/\D/g, "");
          if (!_0x30c216) {
            await _0x25737c("*❌ ᴜsᴀɢᴇ: " + PREFIX + _0x348341 + " <ɴᴜᴍʙᴇʀ>*");
            break;
          }
          updateState(_0x2ffaf8 => {
            _0x2ffaf8.banned = _0x348341 === "ban" ? [...new Set([..._0x2ffaf8.banned, _0x30c216])] : _0x2ffaf8.banned.filter(_0x33d7e6 => _0x33d7e6 !== _0x30c216);
          });
          await _0x25737c("*✅ " + _0x348341 + " +" + _0x30c216 + "*");
          break;
        }
      case "self":
      case "public":
        {
          updateState(_0x53d94a => {
            _0x53d94a.mode = _0x348341;
          });
          await _0x25737c("*✅ ᴍᴏᴅᴇ → " + _0x348341 + "*");
          break;
        }
      case "autoread":
      case "autobio":
      case "autorecording":
      case "autotyping":
      case "autoviewstatus":
      case "autoreact":
      case "autoreactchannel":
        {
          const _0x41cdbd = {
            autoread: "autoread",
            autobio: "autobio",
            autorecording: "autorecord",
            autotyping: "autotyping",
            autoviewstatus: "autoviewsts",
            autoreact: "autoreact",
            autoreactchannel: "autoreactchannel"
          };
          const _0x49d3f7 = _0x41cdbd;
          const _0x309c43 = _0x49d3f7[_0x348341];
          const _0x5c835b = /on|1|true/i.test(_0x5ee7ca);
          updateState(_0x2898c4 => {
            _0x2898c4[_0x309c43] = _0x5c835b;
          });
          await _0x25737c("*✅ " + _0x348341 + " → " + (_0x5c835b ? "ON" : "OFF") + "*");
          break;
        }
      case "block":
      case "unblock":
        {
          const _0x37bd00 = _0x5ee7ca.replace(/\D/g, "") || _0x32be90;
          try {
            await _0x10dc5d.updateBlockStatus(_0x37bd00 + "@s.whatsapp.net", _0x348341);
            await _0x25737c("*✅ " + _0x348341 + " +" + _0x37bd00 + "*");
          } catch (_0x592ce5) {
            await _0x25737c("*❌ " + _0x592ce5.message + "*");
          }
          break;
        }
      case "delete":
      case "del":
        {
          const _0x155830 = _0x4318a0.message?.extendedTextMessage?.contextInfo;
          if (!_0x155830?.stanzaId) {
            await _0x25737c("*❌ ʀᴇᴘʟʏ ᴛᴏ ᴀ ᴍᴇssᴀɢᴇ.*");
            break;
          }
          try {
            await _0x10dc5d.sendMessage(_0x34e785, {
              delete: {
                remoteJid: _0x34e785,
                fromMe: false,
                id: _0x155830.stanzaId,
                participant: _0x155830.participant
              }
            });
          } catch (_0x13bb1d) {
            await _0x25737c("❌ " + _0x13bb1d.message);
          }
          break;
        }
      case "setaccount":
        {
          if (!_0x5ee7ca) {
            await _0x25737c("❌ 𝗨𝘀𝗮𝗴𝗲: *" + PREFIX + "𝘀𝗲𝘁𝗮𝗰𝗰𝗼𝘂𝗻𝘁 <details>*");
            break;
          }
          updateState(_0x461ad8 => {
            _0x461ad8.account = _0x5ee7ca;
          });
          await _0x25737c("✅ 𝗣𝗮𝘆𝗺𝗲𝗻𝘁 𝗮𝗰𝗰𝗼𝘂𝗻𝘁 𝘀𝗮𝘃𝗲𝗱.");
          break;
        }
      case "addsudo":
      case "delsudo":
        {
          const _0x3fa006 = _0x5ee7ca.replace(/\D/g, "");
          if (!_0x3fa006) {
            await _0x25737c("❌ 𝗨𝘀𝗮𝗴𝗲: *" + PREFIX + _0x348341 + " <number>*");
            break;
          }
          updateState(_0x4c1f9f => {
            _0x4c1f9f.sudo = _0x348341 === "addsudo" ? [...new Set([..._0x4c1f9f.sudo, _0x3fa006])] : _0x4c1f9f.sudo.filter(_0x2a35ad => _0x2a35ad !== _0x3fa006);
          });
          await _0x25737c("✅ " + _0x348341 + " +" + _0x3fa006);
          break;
        }
      case "listsudo":
        {
          const _0x263ad6 = getState();
          await _0x25737c("👑 *𝗦𝘂𝗱𝗼 𝗹𝗶𝘀𝘁 (" + _0x263ad6.sudo.length + ")*\n\n" + (_0x263ad6.sudo.map(_0x448bbf => "• +" + _0x448bbf).join("\n") || "(empty)"));
          break;
        }
      case "fixowner":
        {
          await _0x25737c("👑 𝗢𝘄𝗻𝗲𝗿: *" + DEV_NAME + "*\n📞 𝗕𝗼𝘁: +" + (_0x10dc5d.user?.id || "").split(":")[0]);
          break;
        }
      case "getbot":
        {
          await _0x25737c("🤖 *" + BOT_NAME + "* 𝗼𝗻𝗹𝗶𝗻𝗲\nID: " + _0x10dc5d.user?.id + "\n𝗗𝗲𝘃: " + DEV_NAME);
          break;
        }
      case "broadcast":
        {
          if (!_0x5ee7ca) {
            await _0x25737c("❌ 𝗨𝘀𝗮𝗴𝗲: *" + PREFIX + "𝗯𝗿𝗼𝗮𝗱𝗰𝗮𝘀𝘁 <msg>*");
            break;
          }
          await _0x25737c("📢 𝗕𝗿𝗼𝗮𝗱𝗰𝗮𝘀𝘁𝗶𝗻𝗴...");
          try {
            const _0x19f9ae = await _0x10dc5d.groupFetchAllParticipating();
            let _0x396079 = 0;
            for (const _0x3aff62 of Object.keys(_0x19f9ae)) {
              try {
                await _0x10dc5d.sendMessage(_0x3aff62, {
                  text: "📢 *𝗕𝗥𝗢𝗔𝗗𝗖𝗔𝗦𝗧*\n\n" + _0x5ee7ca + "\n\n> " + BOT_NAME,
                  contextInfo: forwardedContext()
                });
                _0x396079++;
                await new Promise(_0x5a612e => setTimeout(_0x5a612e, 1200));
              } catch {}
            }
            await _0x25737c("✅ 𝗦𝗲𝗻𝘁 𝘁𝗼 " + _0x396079 + " 𝗴𝗿𝗼𝘂𝗽𝘀.");
          } catch (_0x17050a) {
            await _0x25737c("❌ " + _0x17050a.message);
          }
          break;
        }
      case "mode":
        {
          const _0x16d73c = getState();
          await _0x25737c("⚙️ 𝗠𝗼𝗱𝗲: *" + _0x16d73c.mode + "*");
          break;
        }
      case "ping":
        {
          const _0x734a85 = Date.now();
          await _0x25737c("🏓 *𝗣𝗼𝗻𝗴!* ⚡ " + (Date.now() - _0x734a85) + "ms");
          break;
        }
      case "alive":
      case "runtime":
      case "uptime":
        {
          const _0x34dae0 = process.uptime();
          const _0x2ef894 = Math.floor(_0x34dae0 / 3600);
          const _0x2fd780 = Math.floor(_0x34dae0 % 3600 / 60);
          const _0x1ae334 = Math.floor(_0x34dae0 % 60);
          const _0x209d86 = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2);
          await _0x15977c(MENU_IMAGE, "[ " + BOT_NAME + " ]──────────\n\n> *STATUS  :* Online & Active\n> *UPTIME  :* " + _0x2ef894 + "h " + _0x2fd780 + "m " + _0x1ae334 + "s\n> *MEMORY  :* " + _0x209d86 + " MB\n> *DEV     :* " + DEV_NAME + "\n────────────────────────\n◆ Your Fast Bot\n\n──────────────────────");
          break;
        }
      case "truth":
        {
          const _0x39204b = ["What's your biggest secret?", "Have you ever lied to your best friend?", "What is your worst habit?", "Have you ever cheated on a test?", "What's the most embarrassing thing you've done?"];
          await _0x25737c("💭 *TRUTH*\n\n" + RAND(_0x39204b));
          break;
        }
      case "dare":
        {
          const _0x4d3b95 = ["Send a selfie right now 📸", "Sing a song in voice note 🎤", "Text your crush a compliment 💌", "Do 10 push-ups and record it 💪", "Change your bio to \"I love bugs 🐛\" for 24h"];
          await _0x25737c("🔥 *DARE*\n\n" + RAND(_0x4d3b95));
          break;
        }
      case "joke":
        {
          try {
            const _0x20939a = await axios.get("https://official-joke-api.appspot.com/random_joke", {
              timeout: 6000
            });
            await _0x25737c("😂 *Joke*\n\n" + _0x20939a.data.setup + "\n— " + _0x20939a.data.punchline);
          } catch {
            await _0x25737c("😂 " + RAND(["Why did the dev quit? No arrays.", "I told a UDP joke, you might not get it."]));
          }
          break;
        }
      case "meme":
        {
          try {
            const _0xf18fb8 = await axios.get("https://meme-api.com/gimme", {
              timeout: 5000
            });
            await _0x15977c(_0xf18fb8.data.url, "😆 " + _0xf18fb8.data.title);
          } catch {
            await _0x25737c("❌ Meme unavailable.");
          }
          break;
        }
      case "ship":
        {
          const _0x37a73a = _0x5ee7ca.split(/\s+and\s+|\s+&\s+|,\s*/);
          if (_0x37a73a.length < 2) {
            await _0x25737c("❌ Usage: *" + PREFIX + "ship NameA and NameB*");
            break;
          }
          await _0x25737c("💞 *SHIP*\n" + _0x37a73a[0] + " ❤️ " + _0x37a73a[1] + "\nCompatibility: *" + Math.floor(Math.random() * 100) + "%*");
          break;
        }
      case "rate":
        {
          await _0x25737c("⭐ *RATE*\n" + (_0x5ee7ca || "You") + " → *" + (Math.floor(Math.random() * 10) + 1) + "/10*");
          break;
        }
      case "flirt":
        {
          const _0x1c7b44 = ["Are you Wi-Fi? Because I'm feeling a connection. 💞", "Did it hurt when you fell from heaven? 😇", "You must be a magician — every time I look at you, everyone else disappears. ✨"];
          await _0x25737c("💋 *FLIRT*\n\n" + RAND(_0x1c7b44));
          break;
        }
      case "roast":
        {
          const _0x13b0f7 = ["You bring everyone so much joy… when you leave the room. 😂", "You're proof that even God makes mistakes sometimes.", "You're not stupid; you just have bad luck thinking."];
          await _0x25737c("🔥 *ROAST* " + (_0x5ee7ca || "") + "\n\n" + RAND(_0x13b0f7));
          break;
        }
      case "compliment":
        {
          const _0x43ca4b = ["You light up every room you enter. ✨", "Your smile could power a city. 💖", "You're the human version of sunshine. ☀️"];
          await _0x25737c("💖 *COMPLIMENT* " + (_0x5ee7ca || "") + "\n\n" + RAND(_0x43ca4b));
          break;
        }
      case "wouldyou":
        {
          const _0x3bdcde = ["Would you rather fly or read minds?", "Would you rather be invisible or super strong?", "Would you rather have unlimited money or unlimited time?"];
          await _0x25737c("🤔 *WOULD YOU RATHER*\n\n" + RAND(_0x3bdcde));
          break;
        }
      case "8balladvice":
      case "8ball":
        {
          const _0x1a802f = ["Yes, absolutely.", "No way.", "Ask again later.", "Outlook good.", "Don't count on it.", "It is certain."];
          await _0x25737c("🎱 *8-BALL*\n\n" + RAND(_0x1a802f));
          break;
        }
      case "urban":
        {
          if (!_0x5ee7ca) {
            await _0x25737c("❌ Usage: *" + PREFIX + "urban <word>*");
            break;
          }
          try {
            const _0x777e80 = await axios.get("https://api.urbandictionary.com/v0/define?term=" + encodeURIComponent(_0x5ee7ca), {
              timeout: 5000
            });
            const _0x3e85da = _0x777e80.data.list?.[0];
            if (!_0x3e85da) {
              throw 0;
            }
            await _0x25737c("📕 *URBAN — " + _0x5ee7ca + "*\n\n" + _0x3e85da.definition.replace(/[[\]]/g, "") + "\n\n_Ex:_ " + _0x3e85da.example.replace(/[[\]]/g, ""));
          } catch {
            await _0x25737c("❌ Not found.");
          }
          break;
        }
      case "moviequote":
        {
          try {
            const _0x435897 = await axios.get("https://api.quotable.io/random?tags=famous-quotes", {
              timeout: 5000
            });
            await _0x25737c("🎬 *MOVIE QUOTE*\n\n\"" + _0x435897.data.content + "\"\n— " + _0x435897.data.author);
          } catch {
            await _0x25737c("🎬 \"May the Force be with you.\" — Star Wars");
          }
          break;
        }
      case "triviafact":
      case "funfact":
      case "fact":
        {
          try {
            const _0x1ed11c = await axios.get("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en", {
              timeout: 5000
            });
            await _0x25737c("🧠 *FUN FACT*\n\n" + _0x1ed11c.data.text);
          } catch {
            await _0x25737c("🧠 Octopuses have 3 hearts. 🐙");
          }
          break;
        }
      case "inspire":
        {
          try {
            const _0x291716 = await axios.get("https://api.quotable.io/random?tags=inspirational", {
              timeout: 5000
            });
            await _0x25737c("✨ *INSPIRE*\n\n\"" + _0x291716.data.content + "\"\n— " + _0x291716.data.author);
          } catch {
            await _0x25737c("✨ \"The best way out is always through.\" — Robert Frost");
          }
          break;
        }
      case "ascii":
        {
          if (!_0x5ee7ca) {
            await _0x25737c("❌ Usage: *" + PREFIX + "ascii <text>*");
            break;
          }
          try {
            const _0xc70ecf = await axios.get("https://artii.herokuapp.com/make?text=" + encodeURIComponent(_0x5ee7ca), {
              timeout: 5000
            });
            await _0x25737c("```" + _0xc70ecf.data + "```");
          } catch {
            await _0x25737c("❌ Service down.");
          }
          break;
        }
      case "progquote":
        {
          try {
            const _0x2b3eaf = await axios.get("https://programming-quotesapi.vercel.app/api/random", {
              timeout: 5000
            });
            const _0x39c884 = _0x2b3eaf.data;
            await _0x25737c("💻 *PROG QUOTE*\n\n\"" + (_0x39c884.quote || _0x39c884.en) + "\"\n— " + _0x39c884.author);
          } catch {
            await _0x25737c("💻 \"Talk is cheap. Show me the code.\" — Linus Torvalds");
          }
          break;
        }
      case "dadjoke":
        {
          try {
            const _0x5b2486 = await axios.get("https://icanhazdadjoke.com/", {
              headers: {
                Accept: "application/json"
              },
              timeout: 5000
            });
            await _0x25737c("👨 *DAD JOKE*\n\n" + _0x5b2486.data.joke);
          } catch {
            await _0x25737c("👨 I don't trust stairs. They're always up to something.");
          }
          break;
        }
      case "paptt":
        {
          await _0x25737c("🎤 PAPTT — feature coming soon. (Requires ffmpeg pipeline.)");
          break;
        }
      case "rps":
        {
          const _0xe26a61 = ["rock", "paper", "scissors"];
          const _0x1c68c8 = _0x5ee7ca.toLowerCase();
          const _0x135474 = RAND(_0xe26a61);
          if (!_0xe26a61.includes(_0x1c68c8)) {
            await _0x25737c("❌ Usage: *" + PREFIX + "rps rock|paper|scissors*");
            break;
          }
          const _0x21ac80 = _0x1c68c8 === _0x135474 ? "Draw" : _0x1c68c8 === "rock" && _0x135474 === "scissors" || _0x1c68c8 === "paper" && _0x135474 === "rock" || _0x1c68c8 === "scissors" && _0x135474 === "paper" ? "You win!" : "Bot wins!";
          await _0x25737c("🎮 You: " + _0x1c68c8 + "\n🤖 Bot: " + _0x135474 + "\n→ *" + _0x21ac80 + "*");
          break;
        }
      case "rpsls":
        {
          const _0x455840 = ["rock", "paper", "scissors", "lizard", "spock"];
          const _0x5e7663 = _0x5ee7ca.toLowerCase();
          const _0x2d0e2e = RAND(_0x455840);
          if (!_0x455840.includes(_0x5e7663)) {
            await _0x25737c("❌ Usage: *" + PREFIX + "rpsls <" + _0x455840.join("|") + ">*");
            break;
          }
          const _0x4a5580 = {
            rock: ["scissors", "lizard"],
            paper: ["rock", "spock"],
            scissors: ["paper", "lizard"],
            lizard: ["paper", "spock"],
            spock: ["rock", "scissors"]
          };
          const _0x1f398e = _0x4a5580;
          const _0x1c8e85 = _0x5e7663 === _0x2d0e2e ? "Draw" : _0x1f398e[_0x5e7663].includes(_0x2d0e2e) ? "You win!" : "Bot wins!";
          await _0x25737c("🎮 You: " + _0x5e7663 + "\n🤖 Bot: " + _0x2d0e2e + "\n→ *" + _0x1c8e85 + "*");
          break;
        }
      case "dice":
        {
          await _0x25737c("🎲 *DICE*\nResult: *" + (Math.floor(Math.random() * 6) + 1) + "*");
          break;
        }
      case "coin":
      case "coinbattle":
        {
          await _0x25737c("🪙 *COIN*\n→ *" + RAND(["Heads", "Tails"]) + "*");
          break;
        }
      case "numberbattle":
      case "numbattle":
        {
          const _0xd20822 = parseInt(_0x5ee7ca) || Math.floor(Math.random() * 100);
          const _0x3e69de = Math.floor(Math.random() * 100);
          await _0x25737c("🔢 You: " + _0xd20822 + "\n🤖 Bot: " + _0x3e69de + "\n→ *" + (_0xd20822 > _0x3e69de ? "You win!" : _0xd20822 < _0x3e69de ? "Bot wins!" : "Draw") + "*");
          break;
        }
      case "hangman":
        {
          const _0x27f42c = _0x34e785;
          if (_0x5ee7ca.length === 1) {
            const _0x48f575 = games.hangman.get(_0x27f42c);
            if (!_0x48f575) {
              await _0x25737c("❌ Start one first: *" + PREFIX + "hangman*");
              break;
            }
            if (_0x48f575.word.includes(_0x5ee7ca.toLowerCase())) {
              _0x48f575.guessed.add(_0x5ee7ca.toLowerCase());
            } else {
              _0x48f575.tries--;
            }
            const _0x591c7e = _0x48f575.word.split("").map(_0x1e870f => _0x48f575.guessed.has(_0x1e870f) ? _0x1e870f : "_").join(" ");
            if (!_0x591c7e.includes("_")) {
              games.hangman.delete(_0x27f42c);
              await _0x25737c("🎉 You won! Word: *" + _0x48f575.word + "*");
              break;
            }
            if (_0x48f575.tries <= 0) {
              games.hangman.delete(_0x27f42c);
              await _0x25737c("💀 Lost. Word: *" + _0x48f575.word + "*");
              break;
            }
            await _0x25737c("🪢 *HANGMAN*\n" + _0x591c7e + "\nTries left: " + _0x48f575.tries);
          } else {
            const _0x26d031 = RAND(HANGMAN_WORDS);
            games.hangman.set(_0x27f42c, {
              word: _0x26d031,
              guessed: new Set(),
              tries: 6
            });
            await _0x25737c("🪢 *HANGMAN started!*\n" + "_ ".repeat(_0x26d031.length).trim() + "\nGuess: *" + PREFIX + "hangman <letter>*");
          }
          break;
        }
      case "tictactoe":
        {
          await _0x25737c("⭕ TicTacToe is being polished — multiplayer board coming soon.");
          break;
        }
      case "guess":
        {
          const _0x23f9e2 = _0x34e785;
          if (_0x5ee7ca) {
            const _0x384271 = games.guess.get(_0x23f9e2);
            if (!_0x384271) {
              await _0x25737c("❌ Start: *" + PREFIX + "guess*");
              break;
            }
            const _0x477c4a = parseInt(_0x5ee7ca);
            if (isNaN(_0x477c4a)) {
              await _0x25737c("❌ Number please.");
              break;
            }
            if (_0x477c4a === _0x384271.n) {
              games.guess.delete(_0x23f9e2);
              await _0x25737c("🎯 Correct! It was *" + _0x384271.n + "*.");
            } else {
              await _0x25737c(_0x477c4a < _0x384271.n ? "⬆️ Higher!" : "⬇️ Lower!");
            }
          } else {
            games.guess.set(_0x23f9e2, {
              n: Math.floor(Math.random() * 100) + 1
            });
            await _0x25737c("🎯 *GUESS 1–100*\nReply: *" + PREFIX + "guess <number>*");
          }
          break;
        }
      case "math":
        {
          const _0x715b39 = _0x34e785;
          if (_0x5ee7ca) {
            const _0x420736 = games.math.get(_0x715b39);
            if (!_0x420736) {
              await _0x25737c("❌ Start: *" + PREFIX + "math*");
              break;
            }
            const _0x29c4ac = parseFloat(_0x5ee7ca);
            games.math.delete(_0x715b39);
            await _0x25737c(_0x29c4ac === _0x420736.r ? "🎉 Correct! " + _0x420736.q + " = " + _0x420736.r : "❌ Wrong. " + _0x420736.q + " = " + _0x420736.r);
          } else {
            const _0x396f3b = Math.floor(Math.random() * 20) + 1;
            const _0x2bfee4 = Math.floor(Math.random() * 20) + 1;
            const _0x2da204 = RAND(["+", "-", "*"]);
            const _0x27e0cf = eval("" + _0x396f3b + _0x2da204 + _0x2bfee4);
            const _0x300076 = {
              q: "" + _0x396f3b + _0x2da204 + _0x2bfee4,
              r: _0x27e0cf
            };
            games.math.set(_0x715b39, _0x300076);
            await _0x25737c("🧮 *MATH*\n" + _0x396f3b + " " + _0x2da204 + " " + _0x2bfee4 + " = ?\nReply: *" + PREFIX + "math <answer>*");
          }
          break;
        }
      case "emojiquiz":
        {
          const _0x49e6dc = {
            q: "🍔🍟",
            a: "fast food"
          };
          const _0x57ce00 = {
            q: "🎬🍿",
            a: "cinema"
          };
          const _0xc0f6fb = {
            q: "🚗💨",
            a: "fast & furious"
          };
          const _0x12262a = {
            q: "👑🐛",
            a: "queen bug"
          };
          const _0x9a3794 = [_0x49e6dc, _0x57ce00, _0xc0f6fb, _0x12262a];
          const _0x1d2faf = RAND(_0x9a3794);
          await _0x25737c("🎲 *EMOJI QUIZ*\n" + _0x1d2faf.q + "\n_Answer:_ ||" + _0x1d2faf.a + "||");
          break;
        }
      case "gamefact":
        {
          await _0x25737c("🎮 *GAME FACT*\nThe first video game was created in 1958: \"Tennis for Two\".");
          break;
        }
      case "toimg":
      case "take":
      case "steal":
      case "wm":
      case "qc":
        {
          await _0x25737c("🖼️ *" + _0x348341.toUpperCase() + "* — sticker tooling requires ffmpeg/sharp pipeline. Send a sticker/image as a reply once enabled on your panel.");
          break;
        }
      case "bass":
      case "blown":
      case "deep":
      case "earrape":
      case "fast":
      case "nightcore":
      case "reverse":
      case "robot":
      case "slow":
      case "smooth":
      case "squirrel":
        {
          await _0x25737c("🔊 *" + _0x348341.toUpperCase() + "*\nReply to an audio. (Requires ffmpeg on Pterodactyl egg — install via `apt-get install ffmpeg`.)");
          break;
        }
      case "tts":
      case "say":
        {
          if (!_0x5ee7ca) {
            await _0x25737c("❌ Usage: *" + PREFIX + "tts <text>*");
            break;
          }
          const _0x241efa = "https://translate.google.com/translate_tts?ie=UTF-8&q=" + encodeURIComponent(_0x5ee7ca) + "&tl=en&client=tw-ob";
          try {
            const _0xb305ba = {
              responseType: "arraybuffer",
              headers: {},
              timeout: 15000
            };
            _0xb305ba.headers["User-Agent"] = "Mozilla/5.0";
            const _0x335552 = await axios.get(_0x241efa, _0xb305ba);
            const _0x2dd996 = {
              quoted: _0x4318a0
            };
            await _0x10dc5d.sendMessage(_0x34e785, {
              audio: Buffer.from(_0x335552.data),
              mimetype: "audio/mpeg",
              ptt: true,
              contextInfo: forwardedContext()
            }, _0x2dd996);
          } catch (_0x5f0dd1) {
            await _0x25737c("❌ " + _0x5f0dd1.message);
          }
          break;
        }
      case "newmail":
      case "tempmail2":
        {
          try {
            const _0x1bc5b8 = await axios.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1", {
              timeout: 6000
            });
            updateState(_0x2df488 => {
              _0x2df488.tempmail = _0x1bc5b8.data[0];
            });
            await _0x25737c("📧 *Temp mail*\n\n`" + _0x1bc5b8.data[0] + "`\nRead with: *" + PREFIX + "readmail*");
          } catch (_0x370907) {
            await _0x25737c("❌ " + _0x370907.message);
          }
          break;
        }
      case "readmail":
      case "tempmail-inbox":
        {
          const _0x3f8e06 = getState();
          if (!_0x3f8e06.tempmail) {
            await _0x25737c("❌ 𝗚𝗲𝗻𝗲𝗿𝗮𝘁𝗲 𝗼𝗻𝗲: *" + PREFIX + "newmail*");
            break;
          }
          const [_0x1d4519, _0x50e4de] = _0x3f8e06.tempmail.split("@");
          try {
            const _0x53885f = await axios.get("https://www.1secmail.com/api/v1/?action=getMessages&login=" + _0x1d4519 + "&domain=" + _0x50e4de, {
              timeout: 6000
            });
            if (!_0x53885f.data.length) {
              await _0x25737c("📭 Inbox empty for `" + _0x3f8e06.tempmail + "`");
              break;
            }
            let _0x400e34 = "📬 *𝗜𝗻𝗯𝗼𝘅 — " + _0x3f8e06.tempmail + "*\n\n";
            for (const _0x38e664 of _0x53885f.data.slice(0, 5)) {
              const _0x48239e = await axios.get("https://www.1secmail.com/api/v1/?action=readMessage&login=" + _0x1d4519 + "&domain=" + _0x50e4de + "&id=" + _0x38e664.id, {
                timeout: 6000
              });
              _0x400e34 += "📨 *" + _0x48239e.data.subject + "*\nFrom: " + _0x48239e.data.from + "\n" + (_0x48239e.data.textBody || _0x48239e.data.body || "").slice(0, 300) + "\n\n";
            }
            await _0x25737c(_0x400e34);
          } catch (_0x12cdb5) {
            await _0x25737c("❌ " + _0x12cdb5.message);
          }
          break;
        }
      case "deltmp":
        {
          updateState(_0x5b3ee8 => {
            delete _0x5b3ee8.tempmail;
          });
          await _0x25737c("🗑️ 𝗧𝗲𝗺𝗽 𝗺𝗮𝗶𝗹 𝗱𝗲𝗹𝗲𝘁𝗲𝗱.");
          break;
        }
      case "weatherwiki":
      case "weather":
        {
          if (!_0x5ee7ca) {
            await _0x25737c("❌ 𝗨𝘀𝗮𝗴𝗲: *" + PREFIX + "𝘄𝗲𝗮𝘁𝗵𝗲𝗿 <city>*");
            break;
          }
          try {
            const _0x5d77b8 = await axios.get("https://wttr.in/" + encodeURIComponent(_0x5ee7ca) + "?format=j1", {
              timeout: 5000
            });
            const _0x49c71a = _0x5d77b8.data.current_condition[0];
            const _0x3a25f1 = _0x5d77b8.data.nearest_area[0];
            await _0x25737c("🌍 *" + _0x3a25f1.areaName[0].value + ", " + _0x3a25f1.country[0].value + "*\n☀️ " + _0x49c71a.temp_C + "°C — " + _0x49c71a.weatherDesc[0].value + "\n💧 " + _0x49c71a.humidity + "% • 💨 " + _0x49c71a.windspeedKmph + " km/h");
          } catch {
            await _0x25737c("❌ 𝗪𝗲𝗮𝘁𝗵𝗲𝗿 𝗲𝗿𝗿𝗼𝗿.");
          }
          break;
        }
      case "currency":
        {
          const _0x5dba75 = _0x5ee7ca.split(/\s+/);
          if (_0x5dba75.length < 3) {
            await _0x25737c("❌ 𝗨𝘀𝗮𝗴𝗲: *" + PREFIX + "𝗰𝘂𝗿𝗿𝗲𝗻𝗰𝘆 100 𝗨𝗦𝗗 𝗘𝗨𝗥*");
            break;
          }
          const [_0x27df1b, _0x932b68, _0x378c76] = _0x5dba75;
          try {
            const _0x428b23 = await axios.get("https://api.exchangerate-api.com/v4/latest/" + _0x932b68.toUpperCase(), {
              timeout: 5000
            });
            const _0x2ed34d = (parseFloat(_0x27df1b) * _0x428b23.data.rates[_0x378c76.toUpperCase()]).toFixed(2);
            await _0x25737c("💱 " + _0x27df1b + " " + _0x932b68.toUpperCase() + " = *" + _0x2ed34d + " " + _0x378c76.toUpperCase() + "*");
          } catch {
            await _0x25737c("❌ 𝗥𝗮𝘁𝗲 𝘂𝗻𝗮𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲.");
          }
          break;
        }
      case "time":
        {
          const _0x1f45f4 = new Date();
          await _0x25737c("🕐 " + _0x1f45f4.toLocaleString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            timeZoneName: "short"
          }));
          break;
        }
      case "qrcode":
        {
          if (!_0x5ee7ca) {
            await _0x25737c("❌ 𝗨𝘀𝗮𝗴𝗲: *" + PREFIX + "𝗾𝗿𝗰𝗼𝗱𝗲 <text>*");
            break;
          }
          await _0x15977c("https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=" + encodeURIComponent(_0x5ee7ca), "📱 𝗤𝗥 𝗳𝗼𝗿: " + _0x5ee7ca);
          break;
        }
      case "readqr":
        {
          await _0x25737c("🔍 𝗥𝗲𝗽𝗹𝘆 𝘁𝗼 𝗮 𝗤𝗥 𝗶𝗺𝗮𝗴𝗲 (feature requires sharp/jimp — coming soon).");
          break;
        }
      case "shorturl":
        {
          if (!_0x5ee7ca) {
            await _0x25737c("❌ 𝗨𝘀𝗮𝗴𝗲: *" + PREFIX + "𝘀𝗵𝗼𝗿𝘁𝘂𝗿𝗹 <url>*");
            break;
          }
          try {
            const _0x4ea4d0 = await axios.get("https://tinyurl.com/api-create.php?url=" + encodeURIComponent(_0x5ee7ca), {
              timeout: 5000
            });
            await _0x25737c("🔗 " + _0x4ea4d0.data);
          } catch {
            await _0x25737c("❌ Error.");
          }
          break;
        }
      case "myip":
        {
          try {
            const _0x311099 = await axios.get("https://api.ipify.org?format=json", {
              timeout: 5000
            });
            await _0x25737c("🌐 𝗕𝗼𝘁 𝗜𝗣: *" + _0x311099.data.ip + "*");
          } catch {
            await _0x25737c("❌ 𝗘𝗿𝗿𝗼𝗿.");
          }
          break;
        }
      case "iplookup":
        {
          if (!_0x5ee7ca) {
            await _0x25737c("❌ 𝗨𝘀𝗮𝗴𝗲: *" + PREFIX + "𝗶𝗽𝗹𝗼𝗼𝗸𝘂𝗽 <ip>*");
            break;
          }
          try {
            const _0x317653 = await axios.get("https://ipapi.co/" + _0x5ee7ca + "/json/", {
              timeout: 5000
            });
            const _0x3847f0 = _0x317653.data;
            await _0x25737c("🌐 *" + _0x3847f0.ip + "*\n📍 " + _0x3847f0.city + ", " + _0x3847f0.region + ", " + _0x3847f0.country_name + "\n🏢 " + _0x3847f0.org + "\n🕐 " + _0x3847f0.timezone);
          } catch {
            await _0x25737c("❌ 𝗟𝗼𝗼𝗸𝘂𝗽 𝗳𝗮𝗶𝗹𝗲𝗱.");
          }
          break;
        }
      case "jid":
        {
          await _0x25737c("🆔 *𝗖𝗵𝗮𝘁 𝗝𝗜𝗗:* " + _0x34e785 + "\n👤 *𝗦𝗲𝗻𝗱𝗲𝗿:* " + _0x4a75a4);
          break;
        }
      case "getpp":
        {
          const _0x18d2bb = _0x5ee7ca.replace(/\D/g, "") ? _0x5ee7ca.replace(/\D/g, "") + "@s.whatsapp.net" : _0x4a75a4;
          try {
            const _0x22ceb0 = await _0x10dc5d.profilePictureUrl(_0x18d2bb, "image");
            await _0x15977c(_0x22ceb0, "📸 PP of +" + _0x18d2bb.split("@")[0]);
          } catch {
            await _0x25737c("❌ 𝗡𝗼 𝗽𝗿𝗼𝗳𝗶𝗹𝗲 𝗽𝗶𝗰𝘁𝘂𝗿𝗲 𝗮𝘃𝗮𝗶𝗹𝗮𝗯𝗹𝗲.");
          }
          break;
        }
      case "github":
        {
          if (!_0x5ee7ca) {
            await _0x25737c("❌ 𝗨𝘀𝗮𝗴𝗲: *" + PREFIX + "𝗴𝗶𝘁𝗵𝘂𝗯 <user>*");
            break;
          }
          try {
            const _0x5c5954 = await axios.get("https://api.github.com/users/" + _0x5ee7ca, {
              timeout: 5000
            });
            const _0x2bb2c1 = _0x5c5954.data;
            await _0x15977c(_0x2bb2c1.avatar_url, "🐙 *" + _0x2bb2c1.login + "*\n" + (_0x2bb2c1.name || "") + "\n" + (_0x2bb2c1.bio || "") + "\n👥 Followers: " + _0x2bb2c1.followers + "\n📦 𝗥𝗲𝗽𝗼𝘀: " + _0x2bb2c1.public_repos + "\n🔗 " + _0x2bb2c1.html_url);
          } catch {
            await _0x25737c("❌ 𝗨𝘀𝗲𝗿 𝗻𝗼𝘁 𝗳𝗼𝘂𝗻𝗱.");
          }
          break;
        }
      case "npm":
      case "npmstalk":
        {
          if (!_0x5ee7ca) {
            await _0x25737c("❌ 𝗨𝘀𝗮𝗴𝗲: *" + PREFIX + "𝗻𝗽𝗺 <package>*");
            break;
          }
          try {
            const _0x288fc6 = await axios.get("https://registry.npmjs.org/" + _0x5ee7ca, {
              timeout: 5000
            });
            const _0x470571 = _0x288fc6.data;
            await _0x25737c("📦 *" + _0x470571.name + "*\n" + (_0x470571.description || "") + "\nLatest: " + _0x470571["dist-tags"]?.latest + "\nLi+cense: " + (_0x470571.license || "N/A") + "\nHome: " + (_0x470571.homepage || ""));
          } catch {
            await _0x25737c("❌ 𝗣𝗮𝗰𝗸𝗮𝗴𝗲 𝗻𝗼𝘁 𝗳𝗼𝘂𝗻𝗱.");
          }
          break;
        }
      case "ffstalk":
        {
          if (!_0x5ee7ca) {
            await _0x25737c("❌ 𝗨𝘀𝗮𝗴𝗲: *" + PREFIX + "𝗳𝗳𝘀𝘁𝗮𝗹𝗸 <FreeFireID>*");
            break;
          }
          const _0x54ff54 = await tryFetch(["https://api.giftedtech.web.id/api/stalk/ffstalk?apikey=gifted&id=" + _0x5ee7ca]);
          if (!_0x54ff54) {
            await _0x25737c("❌ Stalk failed.");
            break;
          }
          await _0x25737c("🎮 *Free Fire*\n" + JSON.stringify(_0x54ff54.result || _0x54ff54, null, 2).slice(0, 1500));
          break;
        }
      case "imbd":
      case "imdb":
        {
          if (!_0x5ee7ca) {
            await _0x25737c("❌ Usage: *" + PREFIX + "imdb <title>*");
            break;
          }
          const _0xe0fe17 = await tryFetch(["https://api.giftedtech.web.id/api/search/imdb?apikey=gifted&query=" + encodeURIComponent(_0x5ee7ca)]);
          if (!_0xe0fe17) {
            await _0x25737c("❌ Not found.");
            break;
          }
          const _0x56d167 = _0xe0fe17.result || _0xe0fe17;
          await _0x25737c("🎬 *" + (_0x56d167.title || _0x5ee7ca) + "*\n" + (_0x56d167.plot || _0x56d167.description || "") + "\n⭐ " + (_0x56d167.rating || "") + "\n📅 " + (_0x56d167.year || ""));
          break;
        }
      case "dictionary":
      case "dict":
        {
          if (!_0x5ee7ca) {
            await _0x25737c("❌ Usage: *" + PREFIX + "dict <word>*");
            break;
          }
          try {
            const _0x2208dd = await axios.get("https://api.dictionaryapi.dev/api/v2/entries/en/" + encodeURIComponent(_0x5ee7ca), {
              timeout: 5000
            });
            const _0x2bdb11 = _0x2208dd.data[0];
            let _0x5acf96 = "📖 *" + _0x2bdb11.word + "* " + (_0x2bdb11.phonetic || "") + "\n\n";
            for (const _0x5f2595 of _0x2bdb11.meanings.slice(0, 2)) {
              _0x5acf96 += "*" + _0x5f2595.partOfSpeech + "*\n• " + _0x5f2595.definitions[0].definition + "\n\n";
            }
            await _0x25737c(_0x5acf96.trim());
          } catch {
            await _0x25737c("❌ Not found.");
          }
          break;
        }
      case "recipe":
      case "recipe-ingredient":
        {
          if (!_0x5ee7ca) {
            await _0x25737c("❌ Usage: *" + PREFIX + "recipe <dish>*");
            break;
          }
          try {
            const _0x1cbdb6 = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=" + encodeURIComponent(_0x5ee7ca), {
              timeout: 6000
            });
            const _0x1ec96b = _0x1cbdb6.data.meals?.[0];
            if (!_0x1ec96b) {
              throw 0;
            }
            let _0x587fab = "";
            for (let _0x232ef0 = 1; _0x232ef0 <= 20; _0x232ef0++) {
              const _0x3bb738 = _0x1ec96b["strIngredient" + _0x232ef0];
              const _0x39fc06 = _0x1ec96b["strMeasure" + _0x232ef0];
              if (_0x3bb738) {
                _0x587fab += "• " + _0x39fc06 + " " + _0x3bb738 + "\n";
              }
            }
            await _0x15977c(_0x1ec96b.strMealThumb, "🍲 *" + _0x1ec96b.strMeal + "*\n📍 " + _0x1ec96b.strArea + "\n\n*Ingredients:*\n" + _0x587fab + "\n*Instructions:*\n" + _0x1ec96b.strInstructions.slice(0, 800) + "...");
          } catch {
            await _0x25737c("❌ Recipe not found.");
          }
          break;
        }
      case "book":
        {
          if (!_0x5ee7ca) {
            await _0x25737c("❌ Usage: *" + PREFIX + "book <title>*");
            break;
          }
          try {
            const _0x74409a = await axios.get("https://www.googleapis.com/books/v1/volumes?q=" + encodeURIComponent(_0x5ee7ca) + "&maxResults=3", {
              timeout: 6000
            });
            let _0x30c4cf = "📚 *Books — " + _0x5ee7ca + "*\n\n";
            for (const _0x3ac0b1 of _0x74409a.data.items || []) {
              const _0x416b1c = _0x3ac0b1.volumeInfo;
              _0x30c4cf += "📖 " + _0x416b1c.title + "\n👤 " + (_0x416b1c.authors || []).join(", ") + "\n🔗 " + _0x416b1c.infoLink + "\n\n";
            }
            await _0x25737c(_0x30c4cf);
          } catch {
            await _0x25737c("❌ Error.");
          }
          break;
        }
      case "remind":
        {
          const _0x30876f = _0x5ee7ca.match(/^(\d+)\s+(.+)/);
          if (!_0x30876f) {
            await _0x25737c("❌ Usage: *" + PREFIX + "remind <minutes> <text>*");
            break;
          }
          const [, _0x3cd8eb, _0x8d6ef5] = _0x30876f;
          await _0x25737c("⏰ Reminder set in " + _0x3cd8eb + " min.");
          setTimeout(() => sendText(_0x10dc5d, _0x34e785, "⏰ *REMINDER:* " + _0x8d6ef5, _0x4318a0), parseInt(_0x3cd8eb) * 60000);
          break;
        }
      case "calculate":
      case "calc":
        {
          if (!_0x5ee7ca) {
            await _0x25737c("❌ Usage: *" + PREFIX + "calc <expr>*");
            break;
          }
          try {
            const _0x13bff9 = _0x5ee7ca.replace(/[^0-9+\-*/().%\s]/g, "");
            const _0x44d49f = Function("\"use strict\"; return (" + _0x13bff9 + ")")();
            await _0x25737c("🧮 " + _0x13bff9 + " = *" + _0x44d49f + "*");
          } catch {
            await _0x25737c("❌ Invalid expression.");
          }
          break;
        }
      case "mathfact":
        {
          const _0x296e94 = parseInt(_0x5ee7ca) || Math.floor(Math.random() * 100);
          try {
            const _0x28ce52 = await axios.get("http://numbersapi.com/" + _0x296e94 + "/math", {
              timeout: 5000
            });
            await _0x25737c("🔢 *MATH FACT*\n" + _0x28ce52.data);
          } catch {
            await _0x25737c("❌ Error.");
          }
          break;
        }
      case "sciencefact":
        {
          const _0x1f42df = ["Light from the Sun takes 8 minutes to reach Earth.", "Bananas are radioactive (a tiny bit).", "A teaspoon of neutron star weighs ~6 billion tons."];
          await _0x25737c("🔬 *SCIENCE FACT*\n" + RAND(_0x1f42df));
          break;
        }
      case "horoscope":
        {
          if (!_0x5ee7ca) {
            await _0x25737c("❌ Usage: *" + PREFIX + "horoscope <sign>*");
            break;
          }
          const _0x45b710 = await tryFetch(["https://aztro.sameerkumar.website/?sign=" + _0x5ee7ca.toLowerCase() + "&day=today", "https://horoscope-app-api.vercel.app/api/v1/get-horoscope/daily?sign=" + _0x5ee7ca.toLowerCase() + "&day=TODAY"]);
          if (!_0x45b710) {
            await _0x25737c("❌ Error.");
            break;
          }
          await _0x25737c("🔮 *" + _0x5ee7ca.toUpperCase() + " — TODAY*\n\n" + (_0x45b710.description || _0x45b710.data?.horoscope_data || JSON.stringify(_0x45b710).slice(0, 500)));
          break;
        }
      case "password":
      case "genpass":
        {
          const _0x489d75 = parseInt(_0x5ee7ca) || 16;
          const _0x105cac = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
          let _0xd0c5ca = "";
          for (let _0x233cbd = 0; _0x233cbd < _0x489d75; _0x233cbd++) {
            _0xd0c5ca += _0x105cac[Math.floor(Math.random() * _0x105cac.length)];
          }
          await _0x25737c("🔐 *Password*\n\n`" + _0xd0c5ca + "`");
          break;
        }
      case "readmore":
        {
          await _0x25737c("📜 readmore — use the invisible character ‎ (already supported in long messages).");
          break;
        }
      case "lidch":
      case "idch":
        {
          await _0x25737c("📡 Channel JID: " + NEWSLETTER_JID);
          break;
        }
      case "react-ch":
        {
          await _0x25737c("💞 Reactions on channels require channel admin access.");
          break;
        }
      case "sfw":
      case "moe":
      case "aipic":
        {
          const _0x46be4a = await fetchAnyImage(["https://api.waifu.pics/sfw/waifu", "https://nekos.best/api/v2/neko"]);
          if (_0x46be4a) {
            await _0x15977c(_0x46be4a, "🖼️ *" + _0x348341.toUpperCase() + "*");
          } else {
            await _0x25737c("❌ Error.");
          }
          break;
        }
      case "hentai":
      case "loli":
        {
          const _0x45a43b = await fetchAnyImage(["https://api.waifu.pics/nsfw/" + (_0x348341 === "loli" ? "waifu" : "waifu"), "https://nekos.life/api/v2/img/Random_hentai_gif"]);
          if (_0x45a43b) {
            await _0x15977c(_0x45a43b, "🔞 *" + _0x348341.toUpperCase() + "*");
          } else {
            await _0x25737c("❌ Error.");
          }
          break;
        }
      case "chinagirl":
      case "bluearchive":
      case "boypic":
      case "carimage":
      case "random-girl":
      case "hijab-girl":
      case "indonesia-girl":
      case "japan-girl":
      case "korean-girl":
      case "malaysia-girl":
      case "profile-pictures":
      case "tiktokgirl":
        {
          const _0x2317ba = await fetchAnyImage(["https://api.giftedtech.web.id/api/sfw/" + _0x348341.replace("-", "") + "?apikey=gifted", "https://api.giftedtech.web.id/api/anime/" + _0x348341.replace("-", "") + "?apikey=gifted", "https://api.waifu.pics/sfw/waifu"]);
          if (_0x2317ba) {
            await _0x15977c(_0x2317ba, "🖼️ *" + _0x348341.toUpperCase() + "*");
          } else {
            await _0x25737c("❌ Try again later.");
          }
          break;
        }
      case "aza":
      case "account":
        {
          const _0x2d82ca = getState();
          await _0x25737c("💳 *Account*\n\n" + (_0x2d82ca.account || "Not set. Use *" + PREFIX + "setaccount <details>*"));
          break;
        }
      case "achar":
        {
          const _0x2b7c52 = await tryFetch(["https://api.jikan.moe/v4/characters?q=" + encodeURIComponent(_0x5ee7ca || "naruto") + "&limit=1"]);
          const _0x1448ae = _0x2b7c52?.data?.[0];
          if (!_0x1448ae) {
            await _0x25737c("❌ Not found.");
            break;
          }
          await _0x15977c(_0x1448ae.images?.jpg?.image_url, "🎌 *" + _0x1448ae.name + "*\n" + (_0x1448ae.about?.slice(0, 800) || ""));
          break;
        }
      case "aquote":
        {
          const _0x3d6600 = await tryFetch(["https://animechan.io/api/v1/quotes/random"]);
          const _0x3b0fe6 = _0x3d6600?.data;
          if (!_0x3b0fe6) {
            await _0x25737c("💬 \"I'll become the Pirate King!\" — Luffy");
            break;
          }
          await _0x25737c("💬 *" + _0x3b0fe6.character?.name + "* (" + _0x3b0fe6.anime?.name + ")\n\n\"" + _0x3b0fe6.content + "\"");
          break;
        }
      case "arecommend":
        {
          const _0x521083 = await tryFetch(["https://api.jikan.moe/v4/recommendations/anime"]);
          const _0x42f0d9 = _0x521083?.data?.[0]?.entry?.[0];
          if (!_0x42f0d9) {
            await _0x25737c("❌ Error.");
            break;
          }
          await _0x15977c(_0x42f0d9.images?.jpg?.image_url, "🎌 Recommended: *" + _0x42f0d9.title + "*\n🔗 " + _0x42f0d9.url);
          break;
        }
      case "asearch":
        {
          if (!_0x5ee7ca) {
            await _0x25737c("❌ Usage: *" + PREFIX + "asearch <anime>*");
            break;
          }
          const _0x5a8261 = await tryFetch(["https://api.jikan.moe/v4/anime?q=" + encodeURIComponent(_0x5ee7ca) + "&limit=1"]);
          const _0x4ce280 = _0x5a8261?.data?.[0];
          if (!_0x4ce280) {
            await _0x25737c("❌ Not found.");
            break;
          }
          await _0x15977c(_0x4ce280.images?.jpg?.image_url, "🎌 *" + _0x4ce280.title + "*\n⭐ " + _0x4ce280.score + "\n📅 " + _0x4ce280.year + "\n📺 " + _0x4ce280.episodes + " ep\n\n" + _0x4ce280.synopsis?.slice(0, 600));
          break;
        }
      case "maid":
      case "megumin":
      case "neko":
      case "shinobu":
      case "waifu":
        {
          const _0x585c6f = await fetchAnyImage(["https://api.waifu.pics/sfw/" + _0x348341, "https://nekos.best/api/v2/" + _0x348341]);
          if (_0x585c6f) {
            await _0x15977c(_0x585c6f, "🌸 *" + _0x348341.toUpperCase() + "*");
          } else {
            await _0x25737c("❌ Try again.");
          }
          break;
        }
      case "telegraph":
        {
          await _0x25737c("📝 Telegraph upload requires reply to image/text (will be enabled with multipart upload pipeline).");
          break;
        }
      case "url":
        {
          await _0x25737c("🔗 " + PREFIX + "url — short an URL: " + PREFIX + "shorturl <url>");
          break;
        }
      case "apk":
        {
          if (!_0x5ee7ca) {
            await _0x25737c("❌ Usage: *" + PREFIX + "apk <app name>*");
            break;
          }
          const _0x4c6c3d = await tryFetch(["https://api.giftedtech.web.id/api/download/apkdl?apikey=gifted&appName=" + encodeURIComponent(_0x5ee7ca)]);
          const _0x36e6e4 = _0x4c6c3d?.result;
          if (!_0x36e6e4?.dllink) {
            await _0x25737c("❌ Not found.");
            break;
          }
          await _0x25737c("📲 *" + _0x36e6e4.name + "*\n📦 " + _0x36e6e4.size + "\n🔗 " + _0x36e6e4.dllink);
          break;
        }
      case "fb":
      case "insta":
      case "pint":
      case "mp4":
      case "video":
      case "yta":
      case "ytv":
      case "ytmp3":
      case "play":
      case "song":
        {
          if (!_0x5ee7ca) {
            await _0x25737c("❌ Usage: *" + PREFIX + _0x348341 + " <url or query>*");
            break;
          }
          await _0x25737c("⏳ Downloading via *" + _0x348341 + "*...");
          const _0x47d33b = {
            fb: ["https://api.giftedtech.web.id/api/download/facebook?apikey=gifted&url=" + encodeURIComponent(_0x5ee7ca)],
            insta: ["https://api.giftedtech.web.id/api/download/instagram?apikey=gifted&url=" + encodeURIComponent(_0x5ee7ca)],
            pint: ["https://api.giftedtech.web.id/api/download/pinterestdl?apikey=gifted&url=" + encodeURIComponent(_0x5ee7ca)],
            mp4: ["https://api.giftedtech.web.id/api/download/ytmp4?apikey=gifted&url=" + encodeURIComponent(_0x5ee7ca)],
            video: ["https://api.giftedtech.web.id/api/download/ytmp4?apikey=gifted&url=" + encodeURIComponent(_0x5ee7ca)],
            ytv: ["https://api.giftedtech.web.id/api/download/ytmp4?apikey=gifted&url=" + encodeURIComponent(_0x5ee7ca)],
            yta: ["https://api.giftedtech.web.id/api/download/ytmp3?apikey=gifted&url=" + encodeURIComponent(_0x5ee7ca)],
            ytmp3: ["https://api.giftedtech.web.id/api/download/ytmp3?apikey=gifted&url=" + encodeURIComponent(_0x5ee7ca)],
            play: ["https://api.giftedtech.web.id/api/download/dlmp3?apikey=gifted&query=" + encodeURIComponent(_0x5ee7ca), "https://api.giftedtech.web.id/api/download/yts?apikey=gifted&query=" + encodeURIComponent(_0x5ee7ca)],
            song: ["https://api.giftedtech.web.id/api/download/dlmp3?apikey=gifted&query=" + encodeURIComponent(_0x5ee7ca)]
          };
          const _0x8c33d3 = await tryFetch(_0x47d33b[_0x348341]);
          const _0x34559e = _0x8c33d3?.result || _0x8c33d3;
          const _0x3c97a0 = _0x34559e?.download_url || _0x34559e?.dl_url || _0x34559e?.url || _0x34559e?.audio || _0x34559e?.video || _0x34559e?.[0]?.url;
          if (!_0x3c97a0) {
            await _0x25737c("❌ Could not fetch " + _0x348341 + ".");
            break;
          }
          const _0x7caa4e = ["yta", "ytmp3", "play", "song"].includes(_0x348341);
          try {
            const _0x3b6a35 = {
              url: _0x3c97a0
            };
            const _0x627cd1 = {
              quoted: _0x4318a0
            };
            const _0xb3a925 = {
              url: _0x3c97a0
            };
            const _0x29e198 = {
              quoted: _0x4318a0
            };
            if (_0x7caa4e) {
              await _0x10dc5d.sendMessage(_0x34e785, {
                audio: _0x3b6a35,
                mimetype: "audio/mpeg",
                contextInfo: forwardedContext()
              }, _0x627cd1);
            } else {
              await _0x10dc5d.sendMessage(_0x34e785, {
                video: _0xb3a925,
                caption: "🎬 " + (_0x34559e.title || ""),
                contextInfo: forwardedContext()
              }, _0x29e198);
            }
          } catch (_0x1681f2) {
            await _0x25737c("🔗 " + _0x3c97a0 + "\n(direct send failed: " + _0x1681f2.message + ")");
          }
          break;
        }
      case "git":
      case "github-dl":
        {
          if (!_0x5ee7ca) {
            await _0x25737c("❌ Usage: *" + PREFIX + "git <user/repo>*");
            break;
          }
          await _0x25737c("📦 ZIP: https://github.com/" + _0x5ee7ca + "/archive/refs/heads/main.zip");
          break;
        }
      case "gitclone":
        {
          if (!_0x5ee7ca) {
            await _0x25737c("❌ Usage: *" + PREFIX + "gitclone <repo url>*");
            break;
          }
          const _0x56c795 = _0x5ee7ca.match(/github\.com\/([^/]+\/[^/]+)/);
          if (!_0x56c795) {
            await _0x25737c("❌ Invalid github URL.");
            break;
          }
          const _0x186163 = "https://github.com/" + _0x56c795[1].replace(/\.git$/, "") + "/archive/refs/heads/main.zip";
          try {
            const _0x58737f = {
              url: _0x186163
            };
            const _0x17188b = {
              quoted: _0x4318a0
            };
            await _0x10dc5d.sendMessage(_0x34e785, {
              document: _0x58737f,
              fileName: _0x56c795[1].split("/").pop() + ".zip",
              mimetype: "application/zip",
              contextInfo: forwardedContext()
            }, _0x17188b);
          } catch {
            await _0x25737c("🔗 " + _0x186163);
          }
          break;
        }
      case "mega":
      case "edit":
        {
          await _0x25737c("⚠️ *" + _0x348341 + "* — needs heavy media pipeline. Coming once ffmpeg/sharp are enabled on your Pterodactyl egg.");
          break;
        }
      case "info":
        {
          const _0x1632ac = process.uptime();
          const _0x265c3b = Math.floor(_0x1632ac / 3600);
          const _0x29005e = Math.floor(_0x1632ac % 3600 / 60);
          await _0x15977c(MENU_IMAGE, "ℹ️ *" + BOT_NAME + " ɪɴғᴏ*\n🛠️ ʟɪʙʀᴀʀʏ: ʙᴀɪʟᴇʏs + ᴛᴇʟᴇɢʀᴀғ\n📞 ᴘᴀɪʀɪɴɢ ᴄᴏᴅᴇ (8 digits)\n🟢 ᴀᴄᴛɪᴠᴇ • ⏱️ " + _0x265c3b + "h " + _0x29005e + "m\n👑 ᴅᴇᴠ: " + DEV_NAME);
          break;
        }
      case "cat":
        {
          try {
            const _0x97f11e = await axios.get("https://api.thecatapi.com/v1/images/search", {
              timeout: 5000
            });
            await _0x15977c(_0x97f11e.data[0].url, "🐱 Cute cat!");
          } catch {
            await _0x25737c("❌");
          }
          break;
        }
      case "dog":
        {
          try {
            const _0x3ab7f5 = await axios.get("https://dog.ceo/api/breeds/image/random", {
              timeout: 5000
            });
            await _0x15977c(_0x3ab7f5.data.message, "🐶 Cute dog!");
          } catch {
            await _0x25737c("❌");
          }
          break;
        }
      case "crypto":
        {
          const _0x13d3af = (_0x5ee7ca || "bitcoin").toLowerCase();
          try {
            const _0x42c35a = await axios.get("https://api.coingecko.com/api/v3/simple/price", {
              params: {
                ids: _0x13d3af,
                vs_currencies: "usd,eur",
                include_24hr_change: true
              },
              timeout: 5000
            });
            const _0x1caf30 = _0x42c35a.data[_0x13d3af];
            if (!_0x1caf30) {
              throw 0;
            }
            await _0x25737c("💰 *" + _0x13d3af.toUpperCase() + "*\n💵 $" + _0x1caf30.usd + "\n💶 €" + _0x1caf30.eur + "\n📈 24h: " + Number(_0x1caf30.usd_24h_change).toFixed(2) + "%");
          } catch {
            await _0x25737c("❌");
          }
          break;
        }
      case "owner":
        {
          try {
            const _0x90b4d6 = "BEGIN:VCARD\nVERSION:3.0\nFN:" + OWNER_NAME + "\nTEL;type=CELL;type=VOICE;waid=" + OWNER_NUMBER + ":+" + OWNER_NUMBER + "\nEND:VCARD";
            const _0x42dbda = {
              vcard: _0x90b4d6
            };
            const _0x12ef53 = {
              displayName: OWNER_NAME,
              contacts: [_0x42dbda]
            };
            const _0x3a34dd = {
              quoted: _0x4318a0
            };
            await _0x10dc5d.sendMessage(_0x34e785, {
              contacts: _0x12ef53,
              contextInfo: forwardedContext()
            }, _0x3a34dd);
          } catch {}
          await _0x15977c(RAND(MENU_IMAGES), "👑 *ᴏᴡɴᴇʀ — " + OWNER_NAME + "*\n📞 +" + OWNER_NUMBER + "\n💬 *ᴡʜᴀᴛsᴀᴘᴘ : " + OWNER_WA + "*\n✈️ *ᴛᴇʟᴇɢʀᴀᴍ : " + OWNER_TG + "*\n📸 *ɪɴsᴛᴀɢʀᴀᴍ : " + OWNER_INSTAGRAM + "*\n🐙 *ɢɪᴛʜᴜʙ   : " + OWNER_GITHUB + "*\n\n🤖 *" + BOT_NAME + "* " + BOT_VERSION + "\n> ᴅᴇᴠ: " + DEV_NAME);
          break;
        }
      case "repo":
        {
          await _0x25737c("📦 *" + BOT_NAME + "* " + BOT_VERSION + "\n🔗 " + REPO_URL + "\n👑 " + DEV_NAME);
          break;
        }
      case "setprefix":
        {
          if (!_0x4318a0.key.fromMe && !_0x2a0707.sudo.includes(_0x32be90)) {
            await _0x25737c("❌ Owner/sudo only.");
            break;
          }
          const _0x47b76b = (_0x5ee7ca || "").trim()[0];
          if (!_0x47b76b) {
            await _0x25737c("❌ Usage: *" + PREFIX + "setprefix <char>*");
            break;
          }
          updateState(_0x55a20e => {
            _0x55a20e.prefix = _0x47b76b;
          });
          await _0x25737c("✅ Préfixe principal mis à *" + _0x47b76b + "* (les autres préfixes restent actifs : " + PREFIXES.join(" ") + ").");
          break;
        }
      case "restart":
        {
          if (!_0x4318a0.key.fromMe && !_0x2a0707.sudo.includes(_0x32be90)) {
            await _0x25737c("❌ Owner/sudo only.");
            break;
          }
          await _0x25737c("♻️ Restart…");
          setTimeout(() => process.exit(0), 800);
          break;
        }
      case "eval":
        {
          if (!_0x4318a0.key.fromMe) {
            await _0x25737c("❌ Owner only.");
            break;
          }
          if (!_0x5ee7ca) {
            await _0x25737c("❌ Usage: *" + PREFIX + "eval <code>*");
            break;
          }
          try {
            let _0x4bd255 = await eval("(async()=>{ " + (_0x5ee7ca.includes("return") ? _0x5ee7ca : "return " + _0x5ee7ca) + " })()");
            if (typeof _0x4bd255 !== "string") {
              _0x4bd255 = JSON.stringify(_0x4bd255, null, 2);
            }
            await _0x25737c("📤 " + String(_0x4bd255).slice(0, 3500));
          } catch (_0xaf312f) {
            await _0x25737c("❌ " + _0xaf312f.message);
          }
          break;
        }
      case "tagadmins":
        {
          if (!isGroup(_0x34e785)) {
            await _0x25737c("❌ Group only.");
            break;
          }
          const {
            admins: _0x30784e
          } = await getGroupAdmins(_0x10dc5d, _0x34e785);
          if (!_0x30784e.length) {
            await _0x25737c("❌ No admins.");
            break;
          }
          const _0x2399af = "👮 *ADMINS*\n\n" + _0x30784e.map(_0x349027 => "• @" + _0x349027.split("@")[0]).join("\n") + "\n\n" + (_0x5ee7ca || "");
          const _0x3e85e9 = {
            quoted: _0x4318a0
          };
          await _0x10dc5d.sendMessage(_0x34e785, {
            text: _0x2399af,
            mentions: _0x30784e,
            contextInfo: forwardedContext()
          }, _0x3e85e9);
          break;
        }
      case "warn":
        {
          if (!isGroup(_0x34e785)) {
            await _0x25737c("❌ Group only.");
            break;
          }
          const {
            admins: _0x25977d
          } = await getGroupAdmins(_0x10dc5d, _0x34e785);
          if (!isGroupAdmin(_0x25977d, _0x4a75a4) && !_0x4318a0.key.fromMe) {
            await _0x25737c("❌ Admins only.");
            break;
          }
          const _0x4bb6d9 = _0x4318a0.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0] || _0x4318a0.message?.extendedTextMessage?.contextInfo?.participant;
          if (!_0x4bb6d9) {
            await _0x25737c("❌ Usage : reply or @mention.");
            break;
          }
          let _0x16385c = false;
          updateState(_0x1a4f3f => {
            _0x1a4f3f.warns[_0x34e785] ??= {};
            _0x1a4f3f.warns[_0x34e785][_0x4bb6d9] = (_0x1a4f3f.warns[_0x34e785][_0x4bb6d9] || 0) + 1;
            if (_0x1a4f3f.warns[_0x34e785][_0x4bb6d9] >= 3) {
              _0x16385c = true;
              delete _0x1a4f3f.warns[_0x34e785][_0x4bb6d9];
            }
          });
          if (_0x16385c) {
            try {
              await _0x10dc5d.groupParticipantsUpdate(_0x34e785, [_0x4bb6d9], "remove");
            } catch {}
            await _0x10dc5d.sendMessage(_0x34e785, {
              text: "⛔ @" + _0x4bb6d9.split("@")[0] + " kické (3/3 warns).",
              mentions: [_0x4bb6d9],
              contextInfo: forwardedContext()
            });
          } else {
            const _0x537907 = getState().warns[_0x34e785][_0x4bb6d9];
            const _0x4b4db8 = {
              quoted: _0x4318a0
            };
            await _0x10dc5d.sendMessage(_0x34e785, {
              text: "⚠️ @" + _0x4bb6d9.split("@")[0] + " averti (" + _0x537907 + "/3). " + (_0x5ee7ca || ""),
              mentions: [_0x4bb6d9],
              contextInfo: forwardedContext()
            }, _0x4b4db8);
          }
          break;
        }
      case "warns":
        {
          if (!isGroup(_0x34e785)) {
            await _0x25737c("❌ Group only.");
            break;
          }
          const _0x3916fb = getState().warns[_0x34e785] || {};
          const _0x22d546 = Object.entries(_0x3916fb);
          if (!_0x22d546.length) {
            await _0x25737c("✅ Aucun warn dans ce groupe.");
            break;
          }
          const _0x3e0d38 = "⚠️ *WARNS*\n\n" + _0x22d546.map(([_0x5a5d1e, _0x257acc]) => "• @" + _0x5a5d1e.split("@")[0] + " → " + _0x257acc + "/3").join("\n");
          await _0x10dc5d.sendMessage(_0x34e785, {
            text: _0x3e0d38,
            mentions: _0x22d546.map(([_0x8e33ae]) => _0x8e33ae),
            contextInfo: forwardedContext()
          });
          break;
        }
      case "resetwarn":
        {
          if (!isGroup(_0x34e785)) {
            await _0x25737c("❌ Group only.");
            break;
          }
          const {
            admins: _0x2dce98
          } = await getGroupAdmins(_0x10dc5d, _0x34e785);
          if (!isGroupAdmin(_0x2dce98, _0x4a75a4) && !_0x4318a0.key.fromMe) {
            await _0x25737c("❌ Admins only.");
            break;
          }
          const _0x40aac5 = _0x4318a0.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
          updateState(_0x5415bf => {
            if (_0x40aac5) {
              if (_0x5415bf.warns[_0x34e785]) {
                delete _0x5415bf.warns[_0x34e785][_0x40aac5];
              }
            } else {
              _0x5415bf.warns[_0x34e785] = {};
            }
          });
          await _0x25737c("✅ Warns reset" + (_0x40aac5 ? " pour @" + _0x40aac5.split("@")[0] : "") + ".");
          break;
        }
      case "afk":
        {
          updateState(_0x182281 => {
            _0x182281.afks[_0x4a75a4] = {
              reason: _0x5ee7ca || "pas de raison",
              since: Date.now()
            };
          });
          await _0x25737c("💤 @" + _0x32be90 + " est maintenant AFK : *" + (_0x5ee7ca || "pas de raison") + "*");
          break;
        }
      case "translate":
      case "trans":
        {
          const _0x28aaad = _0x5ee7ca.match(/^([a-z]{2})\s+(.+)/i);
          if (!_0x28aaad) {
            await _0x25737c("❌ Usage: *" + PREFIX + "translate <lang> <texte>* (ex: fr Hello)");
            break;
          }
          const [, _0x43e774, _0xcb9b27] = _0x28aaad;
          const _0x52d9e7 = await tryFetch(["https://api.popcat.xyz/translate?to=" + _0x43e774 + "&text=" + encodeURIComponent(_0xcb9b27)]);
          await _0x25737c(_0x52d9e7?.translated ? "🌐 (" + _0x43e774 + ") " + _0x52d9e7.translated : "❌ Échec.");
          break;
        }
      case "lyrics":
        {
          if (!_0x5ee7ca) {
            await _0x25737c("❌ Usage: *" + PREFIX + "lyrics <titre>*");
            break;
          }
          const _0x26dccd = await tryFetch(["https://api.popcat.xyz/lyrics?song=" + encodeURIComponent(_0x5ee7ca)]);
          if (!_0x26dccd?.lyrics) {
            await _0x25737c("❌ Pas trouvé.");
            break;
          }
          await _0x25737c("🎵 *" + _0x26dccd.title + "* — " + _0x26dccd.artist + "\n\n" + String(_0x26dccd.lyrics).slice(0, 3500));
          break;
        }
      case "removebg":
        {
          const _0x426d0b = quotedMsg(_0x4318a0);
          if (!_0x426d0b?.quoted?.imageMessage) {
            await _0x25737c("❌ Réponds à une image.");
            break;
          }
          await _0x25737c("⏳ Removing background…");
          await _0x25737c("⚠️ removebg nécessite une clé API (remove.bg). Ajoute REMOVE_BG_KEY puis active le pipeline upload.");
          break;
        }
      case "upscale":
        {
          const _0x4bd409 = quotedMsg(_0x4318a0);
          if (!_0x4bd409?.quoted?.imageMessage) {
            await _0x25737c("❌ Réponds à une image.");
            break;
          }
          await _0x25737c("🔍 Upscale en cours — endpoint upscale activé une fois l'upload media branché.");
          break;
        }
      case "savestatus":
        {
          const _0x5699e1 = quotedMsg(_0x4318a0);
          if (!_0x5699e1?.quoted) {
            await _0x25737c("❌ Réponds à un statut.");
            break;
          }
          try {
            const _0x12b8fb = {
              remoteJid: "status@broadcast",
              participant: _0x5699e1.participant
            };
            const _0x505147 = {
              key: _0x12b8fb,
              message: _0x5699e1.quoted
            };
            const _0x14c059 = {
              forward: _0x505147
            };
            const _0x20f673 = {
              quoted: _0x4318a0
            };
            await _0x10dc5d.sendMessage(_0x34e785, _0x14c059, _0x20f673);
          } catch (_0x5cf9dc) {
            await _0x25737c("❌ " + _0x5cf9dc.message);
          }
          break;
        }
      case "sticker":
      case "stiker":
        {
          const _0x5101ac = quotedMsg(_0x4318a0);
          const _0x8cf9f = _0x5101ac?.quoted?.imageMessage;
          if (!_0x8cf9f) {
            await _0x25737c("❌ Réponds à une image avec *.sticker*.");
            break;
          }
          try {
            const {
              downloadMediaMessage: _0x194ce6
            } = await import("baileys");
            const _0x4e22ee = {
              imageMessage: _0x8cf9f
            };
            const _0x4975bc = {
              message: _0x4e22ee
            };
            const _0x455646 = await _0x194ce6(_0x4975bc, "buffer", {});
            const _0x5e6a8c = {
              sticker: _0x455646
            };
            const _0x343651 = {
              quoted: _0x4318a0
            };
            await _0x10dc5d.sendMessage(_0x34e785, _0x5e6a8c, _0x343651);
          } catch (_0x5bb309) {
            await _0x25737c("❌ Sticker: " + _0x5bb309.message + " (nécessite ffmpeg/sharp).");
          }
          break;
        }
      case "tiktok":
      case "tt":
        {
          if (!_0x5ee7ca) {
            await _0x25737c("❌ Usage: *" + PREFIX + "tiktok <url>*");
            break;
          }
          await _0x25737c("⏳ TikTok…");
          const _0x1ef957 = await tryFetch(["https://api.giftedtech.web.id/api/download/tiktokdl?apikey=gifted&url=" + encodeURIComponent(_0x5ee7ca), "https://api.dreaded.site/api/tiktok?url=" + encodeURIComponent(_0x5ee7ca), "https://api.bk9.dev/download/tiktok?url=" + encodeURIComponent(_0x1749aa)]);
          const _0x8e62f7 = _0x1ef957?.result || _0x1ef957?.tiktok || _0x1ef957;
          const _0x5ca8c1 = _0x8e62f7?.video || _0x8e62f7?.no_watermark || _0x8e62f7?.download_url || _0x8e62f7?.url;
          if (!_0x5ca8c1) {
            await _0x25737c("❌ Échec.");
            break;
          }
          try {
            const _0x2985eb = {
              url: _0x5ca8c1
            };
            const _0x1dc57c = {
              quoted: _0x4318a0
            };
            await _0x10dc5d.sendMessage(_0x34e785, {
              video: _0x2985eb,
              caption: "🎵 " + (_0x8e62f7?.title || "TikTok"),
              contextInfo: forwardedContext()
            }, _0x1dc57c);
          } catch {
            await _0x25737c("🔗 " + _0x5ca8c1);
          }
          break;
        }
      case "spotify":
        {
          if (!_0x5ee7ca) {
            await _0x25737c("❌ Usage: *" + PREFIX + "spotify <titre ou url>*");
            break;
          }
          const _0x46cedf = await tryFetch(["https://api.giftedtech.web.id/api/download/spotifydl?apikey=gifted&url=" + encodeURIComponent(_0x5ee7ca), "https://api.giftedtech.web.id/api/search/spotify?apikey=gifted&query=" + encodeURIComponent(_0x5ee7ca)]);
          const _0xc6b87c = _0x46cedf?.result || _0x46cedf;
          const _0x17f60f = _0xc6b87c?.download_url || _0xc6b87c?.audio || _0xc6b87c?.url || _0xc6b87c?.[0]?.url;
          if (!_0x17f60f) {
            await _0x25737c("❌ Échec Spotify.");
            break;
          }
          try {
            const _0x58c4fa = {
              url: _0x17f60f
            };
            const _0x3e6718 = {
              quoted: _0x4318a0
            };
            await _0x10dc5d.sendMessage(_0x34e785, {
              audio: _0x58c4fa,
              mimetype: "audio/mpeg",
              contextInfo: forwardedContext()
            }, _0x3e6718);
          } catch {
            await _0x25737c("🔗 " + _0x17f60f);
          }
          break;
        }
      default:
        break;
    }
  } catch (_0xc70669) {
    console.error("[cmd " + _0x348341 + "]", _0xc70669?.message || _0xc70669);
    try {
      await _0x25737c("❌ Error: " + (_0xc70669.message || "unknown"));
    } catch {}
  }
}