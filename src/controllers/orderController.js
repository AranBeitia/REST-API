const { restart } = require('nodemon')
const Orders = require('../models/Orders')

async function newOrder(req, res, next) {
	try {
		const data = await Orders.create(req.body)
		res.status(200).send({ success: true, data })
	} catch (error) {
		next(error)
	}
}

async function showAllOrders(req, res, next) {
	try {
		const data = await Orders.find({})
			.populate('client')
			.populate({ path: 'order.product', model: 'Products' })
		res.status(200).send({ success: true, data })
	} catch (error) {
		next(error)
	}
}

async function showOneOrder(req, res, next) {
	try {
		const data = await Orders.findById(req.params.orderId)
			.populate('client')
			.populate({ path: 'order.product', model: 'Products' })
		res.status(200).send({ success: true, data })
	} catch (error) {
		next(error)
	}
}

async function updateOrder(req, res, next) {
	try {
		const data = await Orders.findOneAndUpdate(
			{ _id: req.params.orderId },
			req.body,
			{ new: true }
		)
		res.status(200).send({ success: true, data })
	} catch (error) {
		next(error)
	}
}

async function deleteOrder(req, res, next) {
	try {
		await Orders.findByIdAndDelete(req.params.orderId)
		res
			.status(200)
			.send({ success: true, message: 'The order has been deleted correctly' })
	} catch (error) {
		next(error)
	}
}

module.exports = {
	newOrder,
	showAllOrders,
	showOneOrder,
	updateOrder,
	deleteOrder,
}
