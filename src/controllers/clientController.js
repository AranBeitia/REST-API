const Clients = require('../models/Clients')

// add new client
async function newClient(req, res, next) {
	const client = new Clients(req.body)
	try {
		// almacenar registro
		await client.save()
		res.json({ message: 'Client added correctly' })
	} catch (error) {
		// si hay error, console.log y next
		next(error)
	}
}

//show all the clients
async function showClients(req, res, next) {
	try {
		const clients = await Clients.find({})
		res.json(clients)
	} catch (error) {
		next(error)
	}
}

// show one client by id
async function showOneClient(req, res, next) {
	const client = await Clients.findById(req.params.id)
	if (!client) {
		res.json({ message: "This client doesn't exist" })
		next()
	}
	res.json(client)
}

// update client by id
async function updateClient(req, res, next) {
	try {
		const client = await Clients.findOneAndUpdate(
			{ _id: req.params.id },
			req.body,
			{
				new: true,
			}
		)
		res.json({ message: 'Client updated correctly', client })
	} catch (error) {
		next(error)
	}
}

// delete client by id
async function deleteClient(req, res, next) {
	try {
		await Clients.findOneAndDelete({ _id: req.params.id })
		res.json({ message: 'Client deleted correctly' })
	} catch (error) {
		next(error)
	}
}

module.exports = {
	newClient: newClient,
	showClients: showClients,
	showOneClient: showOneClient,
	updateClient: updateClient,
	deleteClient: deleteClient,
}
