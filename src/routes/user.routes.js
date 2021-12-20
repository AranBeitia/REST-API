const express = require('express')
const userRouter = express.Router()
const userController = require('../controllers/userController')

userRouter.post('/create-account', userController.userRegister)
userRouter.post('/start-session', userController.userAuth)
module.exports = userRouter
