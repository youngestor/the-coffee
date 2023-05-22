const express = require('express')
const router = express.Router()
const { newsController } = require('../controller')

const newsRoute = app => {
    router.get('/read', newsController.handleRead)
    router.get('/trash', newsController.handleTrash)
    router.post('/create', newsController.handleCreate)
    router.put('/update/:id', newsController.handleUpdate)
    router.patch('/restore/:id', newsController.handleRestore)
    router.delete('/delete/:id', newsController.handleDelete)
    router.delete('/delete/force/:id', newsController.handleDeleteForce)

    return app.use('/api/news', router)
}

module.exports = newsRoute
