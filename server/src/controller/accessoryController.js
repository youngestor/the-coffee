const { accessoryModel } = require('../model')

const accessoryController = {
    handleRead: (req, res, next) => {
        accessoryModel.find()
            .then(accessory => res.status(200).json({
                errCode: 0,
                accessory
            }))
            .catch(next)
    },

    handleCreate: (req, res, next) => {
        const name = req.body.name
        const desc = req.body.desc
        const image = req.body.image
        const price = req.body.price
        if (!name || !desc || !image || !price)
            return res.status(500).json({
                errCode: 1,
                errMessage: 'Vui lòng điền đầy đủ thông tin.'
            })

        const accessoryNew = new accessoryModel(req.body)
        accessoryNew.save()
            .then(() => res.status(200).json({
                errCode: 0,
                accessory: accessoryNew
            }))
            .catch(next)
    }
}

module.exports = accessoryController
