const express = require('express')
const productRouter = express.Router()
const productController = require('../controllers/productController')

productRouter.post('/products', productController.newProduct)
productRouter.get('/products', productController.showAllProducts)
productRouter.get('/products/:productId', productController.showOneProduct)
productRouter.patch('/products/:productId', productController.updateProduct)
productRouter.delete('/products/:productId', productController.deleteProduct)

module.exports = productRouter
