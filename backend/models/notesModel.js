
const mongoose = require('mongoose');

const storedDataSchema = new mongoose.Schema({
    heading: {
        type: String,
        unique: true,
        required: [true, 'Must have a heading']
    },
    tags:{
        type: Array
    },
    body:{
        type: String
    }
})

const StoredData = mongoose.model('StoredData', storedDataSchema);

module.exports = StoredData;