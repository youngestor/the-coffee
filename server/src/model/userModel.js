const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')

const Schema = mongoose.Schema

const User = new Schema({
    fullname: { type: String, minlength: 1, maxlength: 50 },
    username: { type: String, unique: true },
    password: { type: String, minlength: 6 },
}, {
    timestamps: true
})

User.plugin(mongooseDelete, {
    deletedAt: true,
    overrideMethods: true,
})

module.exports = mongoose.model('User', User)
