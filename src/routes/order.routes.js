const express = require('express')
const orderRouter = express.Router()
const orderController = require('../controllers/orderController')

orderRouter.post('/orders', orderController.newOrder)
orderRouter.get('/orders', orderController.showAllOrders)
orderRouter.get('/orders/:orderId', orderController.showOneOrder)
orderRouter.patch('/orders/:orderId', orderController.updateOrder)
orderRouter.delete('/orders/:orderId', orderController.deleteOrder)
module.exports = orderRouter
