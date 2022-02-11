const mongoose = require('mongoose')

const orderSchema = mongoose.Schema({
    timestamp:String,
    OT_name:String,
    OT_id:String,
    customer_tel:String,
    customer_name:String,
    shop_name:String,
    shop_address:String,
    corrected:String,
    location:String,
    business_type:String,
    quantity:String,
    rate:String,
    total:String ,
    delivered:String,
    received:String,
    cash:String,
    offer_package:String,
    credit:String
})

module.exports = mongoose.model('order', orderSchema);