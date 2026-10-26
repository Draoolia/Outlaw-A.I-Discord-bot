require('dotenv').config();
module.exports = {
  token: process.env.DISCORD_TOKEN,
  geminiKey: process.env.GEMINI_API_KEY,
  languageRoles: { FR: 'FR', EN: 'EN', ES: 'ES', BR: 'BR', RU: 'RU' },
  colors: { success: 0x00FF00, info: 0x0099FF, error: 0xFF0000 }
};