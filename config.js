//#ENJOY BRO😍
// Credit: JINHUYK|KangJinhuyk 
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "chanjinhuyk@gmail.com";
global.location = "Douala, congo-brazaville";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://paulrick312:rBfEkBv2P9b6LDWH@cluster0.pmmq0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/ChanJinhuyk/JINHUYK-MD-V1";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vb288wN8vd1RufoPfL32";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vb288wN8vd1RufoPfL32";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.postimg.cc/sx2KY0mS/JINHUYK-MD-V1.jpg";
global.devs = "https://wa.me/22893188468 . https://wa.me/22893188468";
global.sudo = process.env.SUDO || "22893188468";
global.owner = process.env.OWNER_NUMBER || "22893188468";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.postimg.cc/nrsBc8Td/JINHUYK-MD-V0.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "false";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://unknown-md-sessions-generator-1.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0ExRHZIVGd1ZzloeTZrMFM0cTM0VC9ibXZEOHowWWtXcHcwWXpDMXRIbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWHk4T3pvUFN6UElucU9saFpoWnBLZ21CcGlWVzBucHU2Wjc2alQwYWVYTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXT0hqRi9wS2FJQlRtekkwa0JFdFF3UjlkZnB1UFpZUkpmVGlTbTBHYkh3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1VjRMSTJIZDNMUHFkUGFpYmEwWWlZQWVWM3oxcnhnNnFPMkR2UTRNYjFJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitGeFMvRFJlbFZVczhPVkVJNWlTQi9sWFRxNFRaNjE4RkQ0NTNIR0oyM3M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkR5TEtWVmVQcG5RaksxWUtkM080N2trRGxheXZqY0NPU1VtZzlWYUVPajQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0ZDemlRdlNlMVplRmJCZ0RtVU5NaUdxNGdOaEhrZTF3VnN3NVlWdE1WYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidXZxc2Q5U1crOG9IUkVYYkdJd1VxY0pBVHV4Wm1YZ2RjYk1mT3FCdzlIND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikd6SE9tdGJXSW9wTkV0ZFJUNUZCZEk0N1czK3dhR21pSTNRZnpTT0FyS3hWSW85dm9CdDdNdHJwbzg3eFNLa1o4R05SYnFhT2wrQ29EUWtVT3czVWpRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTk2LCJhZHZTZWNyZXRLZXkiOiIvR1FLNElDVXM5SEhseFJKWUY3aFVJVUJMaTlnVU13NkQ3MHNlSGJ4aGc0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJxNVl2dlZGV1QwT0JQb0ktU1JRNDN3IiwicGhvbmVJZCI6IjM2MGQ1NTc2LTg2NTQtNDViMS05MDQ4LWQ2NzZlODBjNWQ4MSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2SVUwa3dIY0lUMG5NUDU4N0N3MnFMNUtVUTQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0ZwTUtTay9DaXVXdCs5UGw4UXpsMUxhWkdnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IktDUUdUUFFWIiwibWUiOnsiaWQiOiIyMjg5MzE4ODQ2ODoxM0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJURUNIIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLYVovYVFCRUt6aXc3MEdHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJjV3lNU0FKOUNUaU9MbzRJeG80WStEQ0ZTbDVGdytkRlhtSnNCL2IxcndJPSIsImFjY291bnRTaWduYXR1cmUiOiIrU1lhSzROK1h3d1Y5S3BKNWk5Mm10aU5LWmZVMzNRR3lYY1ZKNzRQZ1BtU3ZoTTRyRnB4a0UxaDNSMGNPU0V4SlhqRFgyZDExQWdHb3Ztc3pPZEtEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiWFhNSERBQkoyZ3FKNUdKZkVsbFlRYTJZWFBNWSswUTlBVlBRb3dkMklUNXpyRkNXOEl5S3ZQVjlrdzREbEU0K0FwZTJRcCs1emxHY1d0ZFpSYnREZ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjg5MzE4ODQ2ODoxM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYRnNqRWdDZlFrNGppNk9DTWFPR1Bnd2hVcGVSY1BuUlY1aWJBZjI5YThDIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM5NjQ5MzM5fQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "🔞",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝐉𝚰𝚴𝚮𝐘𝐔𝐊`",
  author: process.env.PACK_AUTHER || "KEN_TECH",
  packname: process.env.PACK_NAME || "KEN_TECH",
  botname: process.env.BOT_NAME || "KEN_TECH",
  ownername: process.env.OWNER_NAME || "KEN_TECH",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "JINHUYK").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
