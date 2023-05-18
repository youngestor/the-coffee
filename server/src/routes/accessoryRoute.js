const express = require('express')
const router = express.Router()
const { accessoryController } = require('../controller')

const newsRoute = app => {
    router.get('/read', accessoryController.handleRead)
    router.post('/create', accessoryController.handleCreate)

    return app.use('/api/accessory', router)
}

module.exports = newsRoute
