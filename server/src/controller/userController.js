const { userModel } = require('../model')

const userController = {
    handleRead: (req, res, next) => {
        userModel.find()
            .then(user => res.status(200).json({
                user
            }))
            .catch(next)
    }
}

module.exports = userController
