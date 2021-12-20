const Users = require('../models/Users')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

async function userRegister(req, res) {
	const user = new Users(req.body)
	user.password = await bcrypt.hash(req.body.password, 12)
	try {
		await user.save()
		res.status(200).send({ message: 'User created correctly' })
	} catch (error) {
		console.log(error)
		res.json({ message: 'an error has happened' })
	}
}

async function userAuth(req, res, next) {
	const { email, password } = req.body
	const user = await Users.findOne({ email })

	if (!user) {
		await res.status(401).send({ message: "The user doesn't exist" })
		next()
	} else {
		if (!bcrypt.compareSync(password, user.password)) {
			await res.status(401).send({ message: 'Incorrect password' })
			next()
		} else {
			const token = jwt.sign(
				{
					email: user.email,
					name: user.name,
					id: user._id,
				},
				'SECRETKEY',
				{
					expiresIn: '1h',
				}
			)
			res.json({ token })
		}
	}
}

module.exports = {
	userRegister,
	userAuth,
}
