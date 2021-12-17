const express = require('express')
const Router = express.Router()

Router.get('/', (req, res) => {
	res.send('inicio tarari')
})

Router.get('/nosotros', (req, res) => {
	res.send('nosotros')
})

module.exports = Router
