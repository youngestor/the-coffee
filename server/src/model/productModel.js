const mongoose = require('mongoose')
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete')

const Schema = mongoose.Schema

const Product = new Schema({
    name: { type: String, maxlength: 255 },
    desc: String,
    price: String,
    image: String,
    slug: { type: String, slug: 'name', unique: true },
}, {
    timestamps: true
})

mongoose.plugin(slug)
Product.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: true,
})

module.exports = mongoose.model('Product', Product)
