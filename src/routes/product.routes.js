const express = require('express')
const productRouter = express.Router()
const productController = require('../controllers/productController')

productRouter.post('/products', productController.newProduct)

module.exports = productRouter
