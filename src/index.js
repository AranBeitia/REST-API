const express = require('express')
const router = require('./routes/index.routes')
const mongoose = require('mongoose')

// connect mongo
mongoose.Promise = global.Promise
mongoose.connect('mongodb://127.0.0.1:27017/REST-APIS', {
	useNewUrlParser: true,
})

// create server
const app = express()

// app routes
app.use(router)

// port
app.listen(5000)
