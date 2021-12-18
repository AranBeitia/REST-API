const Products = require('../models/Products')

async function newProduct(req, res, next) {
	try {
		const data = await Products.create(req.body)
		res.status(200).send({ message: 'New product created correctly', data })
	} catch (error) {
		next(error)
	}
}

module.exports = {
	newProduct,
}
