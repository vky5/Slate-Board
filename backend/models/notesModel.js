
const mongoose = require('mongoose');

const storedDataSchema = new mongoose.Schema({
    heading: {
        type: String,
        required: [true, 'Must have a heading']
    },
    author:{
        type: String,
        required: [true, 'Note must have an author'],
        select: false
    },
    tags:{
        type: Array
    },
    body:{
        type: String
    }
})


const StoredData = mongoose.model('StoredData', storedDataSchema);

const createIndexOnAuthor = async () => {
    await StoredData.collection.createIndex({ author: 1 });
};

// Call the function to create the index
createIndexOnAuthor();

module.exports = StoredData;