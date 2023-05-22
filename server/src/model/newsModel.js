const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')

const Schema = mongoose.Schema

const News = new Schema({
    title: { type: String, maxlength: 255 },
    desc: String,
    image: String,
    author: String
}, {
    timestamps: true
})

News.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: true,
})

module.exports = mongoose.model('News', News)
