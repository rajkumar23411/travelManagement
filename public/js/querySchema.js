const mongoose = require('mongoose');
//defining schema for the query form
const querySchema = new mongoose.Schema({
    Name: {
        type: String,
        trim: true
    },
    Email: {
        type: String,
        trim: true
    },
    Contact: {
        type: Number,
        trim: true
    },
    Message: {
        type: String,
        trim: true
    }
});

//defining collection for the query form
const query = mongoose.model('query', querySchema);
module.exports = query;