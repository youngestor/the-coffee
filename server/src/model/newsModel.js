const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')

const Schema = mongoose.Schema
mongoose.plugin(slug)

const News = new Schema({
    title: String,
    desc: String,
    image: String,
    author: String,
    slug: {
        type: String,
        slug: 'title'
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('News', News)
