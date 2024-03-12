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
        required: [true, "Please enter a an email"],
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: [true,  'Please enter a Password'],
        minlength: 8
    },
    checkPassword:{
        type: String,
        required: [true, 'Please confirm your Password']
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const UserData = mongoose.model('UserData', userData);

module.exports = UserData;
