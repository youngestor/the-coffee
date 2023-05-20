const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')

const Schema = mongoose.Schema
mongoose.plugin(slug)

const Product = new Schema({
    name: String,
    desc: String,
    price: String,
    quantity: Number,
    image: String,
    author: String,
    slug: {
        type: String,
        slug: 'name'
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Product', Product)
