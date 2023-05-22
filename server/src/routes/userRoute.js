const express = require('express')
const router = express.Router()
const { userController } = require('../controller')

const userRoute = app => {
    router.get('/read', userController.handleRead)
    router.get('/trash', userController.handleTrash)
    router.post('/create', userController.handleCreate)
    router.post('/login', userController.handleLogin)
    router.put('/update/:id', userController.handleUpdate)
    router.patch('/restore/:id', userController.handleRestore)
    router.delete('/delete/:id', userController.handleDelete)
    router.delete('/delete/force/:id', userController.handleDeleteForce)

    return app.use('/api/user', router)
}

module.exports = userRoute
