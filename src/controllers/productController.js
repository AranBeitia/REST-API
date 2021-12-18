const Products = require('../models/Products')

async function newProduct(req, res, next) {
	const product = new Products(req.body)
	try {
		console.log(req.file)
		await product.save()
		res.status(200).send({ message: 'New product created correctly', product })
	} catch (error) {
		next(error)
	}
}

module.exports = {
	newProduct,
}
