const { newsModel } = require('../model')

const newsController = {
    handleRead: (req, res, next) => {
        newsModel.find()
            .then(news => res.status(200).json({
                errCode: 0,
                news
            }))
            .catch(next)
    },

    handleCreate: (req, res, next) => {
        const title = req.body.title
        const desc = req.body.desc
        const image = req.body.image
        if (!title || !desc || !image)
            return res.status(500).json({
                errCode: 1,
                errMessage: 'Vui lòng điền đầy đủ thông tin.'
            })

        const newsNew = new newsModel(req.body)
        newsNew.save()
            .then(() => res.status(200).json({
                errCode: 0,
                news: newsNew
            }))
            .catch(next)
    },

    handleUpdate: (req, res, next) => {
        const _id = req.body._id
        const title = req.body.title
        const desc = req.body.desc
        const image = req.body.image
        if (!_id || !title || !desc || !image)
            return res.status(500).json({
                errCode: 1,
                errMessage: 'Vui lòng điền đầy đủ thông tin.'
            })

        newsModel.updateOne({ _id }, req.body)
            .then(news => res.status(200).json({
                errCode: 0,
                news
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

        newsModel.deleteOne({ _id })
            .then(news => res.status(200).json({
                errCode: 0,
                news
            }))
            .catch(next)
    }
}

module.exports = newsController
