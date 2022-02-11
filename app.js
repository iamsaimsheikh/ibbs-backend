// library imports
const express = require('express');
// const cors = require('cors')
const bodyParser = require('body-parser')

// MongoDb Connection
const mongodbConnection = require('./config/connection')
mongodbConnection();

// config imports
const PORT = require('./config/port')
const app = express();

// Use Middlewares
app.use(express.json())
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
// app.use(cors)

//controller imports
const user = require('./controllers/user_controller')
const admin = require('./controllers/admin_controller')
const order = require('./controllers/order_controller')

//request routing
user(app)
admin(app)
order(app)


app.listen(PORT, () => {
    console.log(`server is running at ${PORT}`)
})

