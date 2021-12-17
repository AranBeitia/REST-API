const express = require('express')
const Router = express.Router()
const clientController = require('../controllers/client-controller')

// add new clients by POST
Router.post('/clients', clientController.newClient)

// get all clients
Router.get('/clients', clientController.showClients)

// get a specific client
Router.get('/clients/:id', clientController.showOneClient)

// update client
Router.put('/clients/:id', clientController.updateClient)

// delete client
Router.delete('/clients/:id', clientController.deleteClient)

module.exports = Router
