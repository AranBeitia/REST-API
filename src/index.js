const express = require('express')
const router = require('./routes/index.routes')
const mongoose = require('mongoose')
const { json, urlencoded } = require('body-parser')

// connect mongo
mongoose.Promise = global.Promise
mongoose.connect('mongodb://127.0.0.1:27017/REST-APIS', {
	useNewUrlParser: true,
})

// create server
const app = express()

//! important: json parser before the routes
app.use(json())
app.use(urlencoded({ extended: true }))

// app routes
app.use(router)

// port
app.listen(5000)
