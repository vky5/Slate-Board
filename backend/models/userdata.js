const mongoose = require('mongoose');

const storedDataSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Must have a username']
    },
    tags:{
        type: Array
    },
    data:{
        type: String,
        default: ""
    }
})

const StoredData = mongoose.model(storedDataSchema);

module.exports = storedDataSchema;