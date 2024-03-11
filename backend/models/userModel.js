const mongoose = require('mongoose')

const userData = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "User Must have username"]
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: [true, "Email is necessary for auth"],
        unique: true
    },
    password: {
        type: String,
        required: [true,  'Password is necessary']
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const UserData = mongoose.model('UserData', userData);

module.exports = UserData;
