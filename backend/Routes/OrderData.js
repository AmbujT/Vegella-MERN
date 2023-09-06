const express = require('express')
const router = express.Router()
const Order = require('../models/Orders')

// router.post('/orderData', async (req, res) => {
//     let data = req.body.order_data
//     await data.splice(0,0,{Order_date:req.body.order_date})
//     console.log("1231242343242354",req.body.email)

//     //if email not exisitng in db then create: else: InsertMany()
//     let eId = await Order.findOne({ 'email': req.body.email })    
//     console.log(eId)
//     if (eId===null) {                                //First Order
//         try {
//             console.log(data)
//             console.log("1231242343242354",req.body.email)
//             await Order.create({
//                 email: req.body.email,
//                 order_data:[data]
//             }).then(() => {
//                 res.json({ success: true })
//             })
//         } catch (error) {
//             console.log(error.message)
//             res.send("Server Error", error.message)

//         }
//     }

//     else {                                                               //Old Customer
//         try {
//             await Order.findOneAndUpdate({email:req.body.email},
//                 { $push:{order_data: data} }).then(() => {
//                     res.json({ success: true })
//                 })
//         } catch (error) {
//             console.log(error.message)
//             res.send("Server Error", error.message)
//         }
//     }
// })
app.use(bodyParser.json());

// Define an API route to handle order data
app.post('/orderData', async (req, res) => {
    try {
      const orderData = req.body;
  
      // Assuming orderData is structured as per your schema
      const newOrder = new Order({
        userId: orderData.userId,
        products: orderData.products,
        subtotal: orderData.subtotal,
        shippingCost: orderData.shippingCost,
        tax: orderData.tax,
        totalAmount: orderData.totalAmount,
        paymentMethod: orderData.paymentMethod
      });
  
      await newOrder.save();
      res.status(201).json({ message: 'Order saved successfully' });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while saving the order' });
    }
  });
module.exports = router;