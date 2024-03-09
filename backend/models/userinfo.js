const mongoose = require('mongoose')

const userData = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "User Must have username"]
    },
    email: {
        type: String,
        required: [true, "User "]
    }
})