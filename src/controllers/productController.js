const Products = require('../models/Products')

async function newProduct(req, res, next) {
	const product = new Products(req.body)

	try {
		const image = req.files.image
		if (image) {
			const path = process.cwd() + '/src/uploads/' + image.name
			image.mv(path, function (err) {
				if (err) res.status(500).send(err)
			})

			product.image = image.name
		}
		await product.save()
		res.status(200).send({ message: 'New product created correctly', product })
	} catch (error) {
		next(error)
	}
}

async function showAllProducts(req, res, next) {
	try {
		const data = await Products.find({})
		res.status(200).send({ success: true, data })
	} catch (error) {
		next(error)
	}
}

async function showOneProduct(req, res, next) {
	try {
		const data = await Products.findById(req.params.productId)
		res.status(200).send({ success: true, data })
	} catch (error) {
		next(error)
	}
}

async function updateProduct(req, res, next) {
	try {
		data = await Products.findOneAndUpdate(req.params.productId)
		res.status(200).send({ success: true, data })
	} catch (error) {
		next(error)
	}
}

async function deleteProduct(req, res, next) {
	try {
		await Products.findByIdAndDelete(req.params.productId)
		res
			.status(200)
			.send({ success: true, message: 'The product has been deleted' })
	} catch (error) {
		next(error)
	}
}

module.exports = {
	newProduct,
	showAllProducts,
	showOneProduct,
	updateProduct,
	deleteProduct,
}
