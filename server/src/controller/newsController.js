const { newsModel } = require('../model')

const newsController = {
    handleRead: (req, res, next) => {
        newsModel.find()
            .then(allNews => res.status(200).json({
                allNews
            }))
            .catch(next)
    },

    handleTrash: (req, res, next) => {
        newsModel.findDeleted()
            .then(allNews => res.status(200).json({
                allNews
            }))
            .catch(next)
    },

    handleCreate: (req, res, next) => {
        const { title, desc, image } = req.body
        if (!title || !desc || !image)
            return res.status(500).json({
                errMessage: 'Vui lòng điền đầy đủ thông tin.'
            })

        const newsNew = new newsModel(req.body)
        newsNew.save()
            .then(() => res.status(200).json({
                news: newsNew
            }))
            .catch(next)
    },

    handleUpdate: (req, res, next) => {
        const _id = req.params.id
        const { title, desc, image } = req.body
        if (!_id || !title || !desc || !image)
            return res.status(500).json({
                errMessage: 'Vui lòng điền đầy đủ thông tin.'
            })

        newsModel.updateOne({ _id }, req.body)
            .then(news => res.status(200).json({
                news
            }))
            .catch(next)
    },

    handleRestore: (req, res, next) => {
        const _id = req.params.id
        if (!_id)
            return res.status(500).json({
                errMessage: 'Vui lòng điền đầy đủ thông tin.'
            })

        newsModel.restore({ _id })
            .then(news => res.status(200).json({
                news
            }))
            .catch(next)
    },

    handleDelete: (req, res, next) => {
        const _id = req.params.id
        if (!_id)
            return res.status(500).json({
                errMessage: 'Vui lòng điền đầy đủ thông tin.'
            })

        newsModel.delete({ _id })
            .then(news => res.status(200).json({
                news
            }))
            .catch(next)
    },

    handleDeleteForce: (req, res, next) => {
        const _id = req.params.id
        if (!_id)
            return res.status(500).json({
                errMessage: 'Vui lòng điền đầy đủ thông tin.'
            })

        newsModel.deleteOne({ _id })
            .then(news => res.status(200).json({
                news
            }))
            .catch(next)
    }
}

module.exports = newsController
