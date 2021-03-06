const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
	const authHeader = req.get('Authorization')

	if (!authHeader) {
		const error = new Error('Not authenticated, no JWT')
		error.statusCode = 401
		throw error
	}

	const token = authHeader.split(' ')[1]
	let reviewToken = ''

	try {
		reviewToken = jwt.verify(token, 'SECRETKEY')
	} catch (error) {
		error.statusCode = 500
		throw error
	}

	if (!reviewToken) {
		const error = new Error('No authenticated')
		error.statusCode = 401
		throw error
	}
	next()
}
