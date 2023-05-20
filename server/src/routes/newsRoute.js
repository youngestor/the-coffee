const express = require('express')
const router = express.Router()
const { newsController } = require('../controller')

const newsRoute = app => {
    router.get('/read', newsController.handleRead)
    router.post('/create', newsController.handleCreate)
    router.put('/update', newsController.handleUpdate)
    router.post('/delete', newsController.handleDelete)

    return app.use('/api/news', router)
}

module.exports = newsRoute
