const express = require('express')
const mongoose = require('mongoose')
const { json, urlencoded } = require('body-parser')
const fileUpload = require('express-fileupload')
const clientRouter = require('./routes/client.routes')
const productRouter = require('./routes/product.routes')
const orderRouter = require('./routes/order.routes')

// connect mongo
mongoose.Promise = global.Promise
mongoose.connect('mongodb://127.0.0.1:27017/REST-APIS', {
	useNewUrlParser: true,
})

// create server
const app = express()

// middlewares
//! important: json parser before the routes
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(fileUpload({ createParentPath: true }))

// app routes
app.use(clientRouter)
app.use(productRouter)
app.use(orderRouter)

// port
app.listen(5000)
