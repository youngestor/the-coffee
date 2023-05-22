const express = require('express')
const router = express.Router()
const { productController } = require('../controller')

const newsRoute = app => {
    router.get('/read', productController.handleRead)
    router.get('/trash', productController.handleTrash)
    router.post('/create', productController.handleCreate)
    router.put('/update/:id', productController.handleUpdate)
    router.patch('/restore/:id', productController.handleRestore)
    router.delete('/delete/:id', productController.handleDelete)
    router.delete('/delete/force/:id', productController.handleDeleteForce)

    return app.use('/api/product', router)
}

module.exports = newsRoute
