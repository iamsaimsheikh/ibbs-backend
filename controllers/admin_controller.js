const Admin = require('../models/admin')
const bcrypt = require('bcrypt')
const {adminLoginValidation , adminRegisterValidation} = require('./validation')






module.exports = (app) => {


    app.post('/admin/register' , async (req , res) => {

        const data = req.body
        const {error} = adminRegisterValidation(data)
        if(error) return res.status(400).send(error.details[0].message)

        const salt =  await bcrypt.genSalt(10)
        const hashedPassword =  await  bcrypt.hash(req.body.password, salt)

        let admin =  new Admin({
            name: data.name,
            password: hashedPassword,
            email: data.email
        })

        try {

        await admin.save(data)
        console.log('admin saved')

        } catch (error) {
            res.send(error)
        }


    })


    app.post('/admin/login' , async ( req , res) => {
        
        const data = req.body
        
        const {error} = adminLoginValidation(data)
        if(error) return res.status(400).send(error.details[0].message)

        let userExists = await Admin.findOne({email:data.email})
        if (!userExists) return res.status(400).send("Invalid Email or Password")

        const validPass = await bcrypt.compare(data.password , userExists.password)
        if (!validPass) return res.status(400).send("Invalid Email or Password")
        
        res.json(userExists)

    })

    
}