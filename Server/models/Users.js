const { Schema, model } = require('mongoose');

const User =  new Schema({
    username: { type: String, required: true, unique: true},
    fullname: { type: String, required: true},
    password: { type: String, required: true, minlength: 6},
    email: { type: String, required: true, unique: true },
    profilePic: { type: String, default: ""},
    gender: { type: String, required: true, enum: ['male', 'female'], default: 'male'}
}, {timestamps: true})

module.exports = model('User', User);