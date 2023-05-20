const express = require('express')
const router = express.Router()
const { accessoryController } = require('../controller')

const newsRoute = app => {
    router.get('/read', accessoryController.handleRead)
    router.post('/create', accessoryController.handleCreate)
    router.put('/update', accessoryController.handleUpdate)
    router.post('/delete', accessoryController.handleDelete)

    return app.use('/api/accessory', router)
}

module.exports = newsRoute
