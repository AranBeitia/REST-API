const Products = require('../models/Products')

async function newProduct(req, res, next) {
	const product = new Products(req.body)
	try {
		const image = req.files.image
		if (image) {
			const path = __dirname + '/uploads/' + image.name

			image.mv(path, function (err) {
				if (err) {
					return res.status(500).send(err)
				}
			})

			product.image = image.name
		}
		await product.save()
		res.status(200).send({ message: 'New product created correctly', product })
	} catch (error) {
		next(error)
	}
}

module.exports = {
	newProduct,
}
