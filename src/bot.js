const ViberBot = require('viber-bot');
const Bot = ViberBot.Bot
const Message = ViberBot.Message

const bot = new Bot({
    authToken: 'bot token',
    name: "EchoBot",
    avatar: "https://cdn.wallpapersafari.com/72/40/9lov8z.jpg" // It is recommended to be 720x720, and no more than 100kb.
});


module.exports = {bot, Message}