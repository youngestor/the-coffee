const { productModel } = require('../model')

const productController = {
    handleRead: (req, res, next) => {
        productModel.find()
            .then(allProducts => res.status(200).json({
                allProducts
            }))
            .catch(next)
    },

    handleTrash: (req, res, next) => {
        productModel.findDeleted()
            .then(allProducts => res.status(200).json({
                allProducts
            }))
            .catch(next)
    },

    handleCreate: (req, res, next) => {
        const { name, desc, image, price } = req.body
        if (!name || !desc || !image || !price)
            return res.status(500).json({
                errMessage: 'Vui lòng điền đầy đủ thông tin.'
            })

        const productNew = new productModel(req.body)
        productNew.save()
            .then(() => res.status(200).json({
                product: productNew
            }))
            .catch(next)
    },

    handleUpdate: (req, res, next) => {
        const _id = req.params.id
        const { name, desc, image, price } = req.body
        if (!name || !desc || !image || !price)
            return res.status(500).json({
                errMessage: 'Vui lòng điền đầy đủ thông tin.'
            })

        productModel.updateOne({ _id }, req.body)
            .then(product => res.status(200).json({
                product
            }))
            .catch(next)
    },

    handleRestore: (req, res, next) => {
        const _id = req.params.id
        if (!_id)
            return res.status(500).json({
                errMessage: 'Vui lòng điền đầy đủ thông tin.'
            })

        productModel.restore({ _id })
            .then(product => res.status(200).json({
                product
            }))
            .catch(next)
    },

    handleDelete: (req, res, next) => {
        const _id = req.params.id
        if (!_id)
            return res.status(500).json({
                errMessage: 'Vui lòng điền đầy đủ thông tin.'
            })

        productModel.delete({ _id })
            .then(product => res.status(200).json({
                product
            }))
            .catch(next)
    },

    handleDeleteForce: (req, res, next) => {
        const _id = req.params.id
        if (!_id)
            return res.status(500).json({
                errMessage: 'Vui lòng điền đầy đủ thông tin.'
            })

        productModel.deleteOne({ _id })
            .then(product => res.status(200).json({
                product
            }))
            .catch(next)
    }
}

module.exports = productController
