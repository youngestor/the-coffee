const { productModel } = require('../model')

const productController = {
    handleRead: (req, res, next) => {
        productModel.find()
            .then(product => res.status(200).json({
                errCode: 0,
                product
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

        const productNew = new productModel(req.body)
        productNew.save()
            .then(() => res.status(200).json({
                errCode: 0,
                product: productNew
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

        productModel.updateOne({ _id }, req.body)
            .then(product => res.status(200).json({
                errCode: 0,
                product
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

        productModel.deleteOne({ _id })
            .then(product => res.status(200).json({
                errCode: 0,
                product
            }))
            .catch(next)
    }
}

module.exports = productController
