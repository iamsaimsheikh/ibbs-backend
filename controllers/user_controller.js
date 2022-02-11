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

    app.delete('user/delete' , async (req, res) => {
        let user = req.body._id
        
        try {
            await User.deleteOne({_id:user})
            res.send("Deleted Successfully")    
        } catch (error) {
            res.send(error)
        }
    })
}

// adnan Shah 6206e1a35651e727b61c2fe2