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
        const quantity = req.body.quantity
        if (!name || !desc || !image || !price || !quantity)
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
    },

    handleUpdate: (req, res, next) => {
        const _id = req.body._id
        const name = req.body.name
        const desc = req.body.desc
        const image = req.body.image
        const price = req.body.price
        const quantity = req.body.quantity
        if (!name || !desc || !image || !price || !quantity)
            return res.status(500).json({
                errCode: 1,
                errMessage: 'Vui lòng điền đầy đủ thông tin.'
            })

        accessoryModel.updateOne({ _id }, req.body)
            .then(accessory => res.status(200).json({
                errCode: 0,
                accessory
            }))
            .catch(next)
    },

    handleDelete: (req, res, next) => {
        const _id = req.body._id
        if (!_id)
            return res.status(500).json({
                errCode: 1,
                errMessage: 'Vui lòng điền đầy đủ thông tin.'
            })

        accessoryModel.deleteOne({ _id })
            .then(accessory => res.status(200).json({
                errCode: 0,
                accessory
            }))
            .catch(next)
    }
}

module.exports = accessoryController
