const Order = require('../models/order')

module.exports = (app) => {

    app.get('/order', async (req , res) => {
        const order = await Order.find();
        res.send(order);
    })

    app.post('/order/new', async (req , res) => {
        let order = new Order(req.body)
        console.log(order)
        try {
            await order.save();
            res.send(order)
        } catch (error) {
            res.send(err)
        }
    })

    app.get('/order/findbyuser', async (req , res) => {
        let user = req.body.OT_id;
        console.log(user)
        try {
            const orders =  await Order.find({OT_id:user});
            res.json(orders)
        } catch (error) {
            res.send(error)
        }
    })

}