const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    name:String,
    lastName:String,
    contactNo:String,

})

module.exports = mongoose.model('user', userSchema)