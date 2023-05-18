const express = require('express')
const router = express.Router()
const { userController } = require('../controller')

const userRoute = app => {
    router.get('/read', userController.handleRead)
    router.post('/create', userController.handleCreate)
    router.post('/login', userController.handleLogin)

    return app.use('/api/user', router)
}

module.exports = userRoute
