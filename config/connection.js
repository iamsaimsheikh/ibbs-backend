const mongoose = require('mongoose')
const url = 'mongodb+srv://ibbs:ibbs@ibbs.nmwyd.mongodb.net/ibbs?retryWrites=true&w=majority'

const connect = () => mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {

    console.log('connected to database')

})
.catch((err) => {
    console.log(err)
})

module.exports = connect