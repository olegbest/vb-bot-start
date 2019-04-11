const viberMessage = require('./../bot').Message;
const bot = require('./../bot').bot;
const DButils = require('./../db/DB_Utils')

class MessageLogic {
    constructor() {
    }

    async start(data) {
        if (data) {
            let sender = data.sender;
            const TextMessage = viberMessage.Text;
            const KeyboardMessage = viberMessage.Keyboard
            if (sender) {
                let user = await DButils.findUser(sender)
                if (user) {
                    await bot.sendMessage(sender, [
                        new TextMessage("Hello")
                    ])
                } else {
                    await DButils.createUser(sender);
                    const SAMPLE_KEYBOARD = {
                        "Type": "keyboard",
                        "type": "keyboard",
                        "Revision": 1,
                        "Buttons": [
                            {
                                "Columns": 3,
                                "Rows": 2,
                                "BgColor": "#e6f5ff",
                                "BgMedia": "http://www.jqueryscript.net/images/Simplest-Responsive-jQuery-Image-Lightbox-Plugin-simple-lightbox.jpg",
                                "BgMediaType": "picture",
                                "BgLoop": true,
                                "ActionType": "reply",
                                "ActionBody": "Yes"
                            }
                        ]
                    };

                    const keyboard = new KeyboardMessage(SAMPLE_KEYBOARD);
                    await bot.sendMessage(sender, [
                        new TextMessage("Привет!"),
                        new TextMessage("Вижу ты в первый раз у нас :D"),
                        new TextMessage("Впереди у нас много интересного."),
                        new TextMessage("Начнем?"),
                    ])
                }
            }
        }
    }
}

module.exports = MessageLogic