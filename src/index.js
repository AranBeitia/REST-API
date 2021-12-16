const express = require('express')
const router = require('./routes/index.routes')

// create server
const app = express()

// app routes
app.use(router)

// port
app.listen(5000)
