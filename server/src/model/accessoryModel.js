const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')

const Schema = mongoose.Schema
mongoose.plugin(slug)

const Accessory = new Schema({
    name: String,
    desc: String,
    price: Number,
    image: String,
    author: String,
    slug: {
        type: String,
        slug: 'title'
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Accessory', Accessory)
