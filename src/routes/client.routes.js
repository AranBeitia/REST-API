const express = require('express')
const clientRouter = express.Router()
const clientController = require('../controllers/clientController')

// add new clients by POST
clientRouter.post('/clients', clientController.newClient)

// get all clients
clientRouter.get('/clients', clientController.showClients)

// get a specific client
clientRouter.get('/clients/:id', clientController.showOneClient)

// update client
clientRouter.put('/clients/:id', clientController.updateClient)

// delete client
clientRouter.delete('/clients/:id', clientController.deleteClient)

module.exports = clientRouter
