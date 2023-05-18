const express = require('express')
const router = express.Router()
const { newsController } = require('../controller')

const newsRoute = app => {
    router.get('/read', newsController.handleRead)
    router.post('/create', newsController.handleCreate)

    return app.use('/api/news', router)
}

module.exports = newsRoute
