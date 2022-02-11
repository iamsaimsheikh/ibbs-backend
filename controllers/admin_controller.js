const Admin = require('../models/admin')


module.exports = (app) => {


    app.get('/admin/login' , async ( req , res) => {
        const getEmail = req.body.email
        let findAdmin = await Admin.find({email:getEmail})
        res.send(findAdmin)
    })

    
}