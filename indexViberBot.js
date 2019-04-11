const express = require('express')
const app = express()
const port = process.env.PORT || 9750;
const bodyParser = require('body-parser');
const config = require('./config/config')
app.use(bodyParser());

app.get('/', function (req, res) {
    res.send('hello world')
});

const bot = require('./src/bot').bot

const routes = require('./src/routes');
let Routes = new routes(app);
Routes.setup();

app.use(bot.middleware());

app.listen(port);
console.log('The magic happens on port ' + port);

bot.setWebhook(config.webhook).then(() => {
    console.log("webhook was set")
}).catch((err) => {
    console.log('error');
    console.log(err)
});