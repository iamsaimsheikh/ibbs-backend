const User = require('../models/user')

module.exports = (app) => {

    app.get('/user', async (req,res) => {
        let allUsers = await User.find();
        res.send(allUsers)
    })

    app.post('/user/add' , async (req , res) => {
        let user = new User(req.body)
        try {
            await user.save();
            res.send(user)
        } catch (error) {
            res.send(error)
        }
    })
}