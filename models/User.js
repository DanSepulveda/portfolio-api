const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    admin: { flag: { type: Boolean, default: false }, key: String },
    username: { type: String, required: true },
    password: { type: String, required: true }
})

const User = mongoose.model('user', userSchema)

module.exports = User