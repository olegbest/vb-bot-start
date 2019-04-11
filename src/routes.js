const MessageLogic = require('./messages/messageLogic');
const messageLogic = new MessageLogic();


class routes {
    constructor(app, bot) {
        this._app = app;
        this._bot = bot
    }

    setup() {
        this._app.post('/', async (req, res) => {
            console.log(req.body)
            res.sendStatus(200)
            let data = req.body;
            if (data) {
                await messageLogic.start(data)
            }
        })
    }
}

module.exports = routes