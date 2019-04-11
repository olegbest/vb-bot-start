const models = require('mongoose');

const db = models.createConnection("mongodb://localhost:27017/ViberCoffeeBot", {
    useNewUrlParser: true,
    auth: {authSource: "admin"},
    user: 'botcubemongodb_5feDo70wrSgFr33Gsd23p0r4',
    pass: '5g4F4gmsWfg567Wet7H73FvwSf34he'
});

const Schema = models.Schema;
const usersSchema = new Schema({
    sender: {
        type: Object
    }
});
const userModel = db.model('users', usersSchema);
module.exports.userModel = userModel;
