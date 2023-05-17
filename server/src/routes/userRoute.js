const express = require('express')
const router = express.Router()
const { userController } = require('../controller')

const userRoute = app => {
    router.get('/read', userController.handleRead)

    return app.use('/api/user', router)
}

module.exports = userRoute
