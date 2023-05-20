const mongoose = require('mongoose')

const Schema = mongoose.Schema

const News = new Schema({
    title: String,
    desc: String,
    image: String,
    author: String
}, {
    timestamps: true
})

module.exports = mongoose.model('News', News)
