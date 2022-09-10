//Initalization of Database
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Creating Database
const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    coverimg: {
        type: String,
        required: true
    },
    order: {
        type: Number,
        required: true
    },
    completed: {
        type: Boolean,
        default: true
    },
    author: {
        type: String,
        required: true
    },

},
{timestamp: true});

//Exporting Database
const Books = mongoose.model("books",bookSchema);
module.exports = Books;