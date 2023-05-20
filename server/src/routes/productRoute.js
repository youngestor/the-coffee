const express = require('express')
const router = express.Router()
const { productController } = require('../controller')

const newsRoute = app => {
    router.get('/read', productController.handleRead)
    router.post('/create', productController.handleCreate)
    router.put('/update', productController.handleUpdate)
    router.post('/delete', productController.handleDelete)

    return app.use('/api/product', router)
}

module.exports = newsRoute
