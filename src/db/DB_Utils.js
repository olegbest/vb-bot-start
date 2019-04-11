const models = require('./models')
const user_model = models.userModel

module.exports = {
    async createUser(sender){
        let user = new user_model({
            sender
        })
        await user.save();
        return user
    },

    async findUser(sender){
        return await user_model.findOne({'sender.id': sender.id})
    }
}