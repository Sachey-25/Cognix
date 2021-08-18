const mongoose = require('mongoose');
// I need to create a model -- mongo model which understands the records
var bookSchema=new mongoose.Schema({
    // Providing the properties that i wanted to store in the db.
    // Title, Author, Numberpages, publisher
    title:{
        type: String,
        requited: true
    },
    author: {
        type: String,
        required: true
    },
    numberPages:{
        type:Number,
        required:false
    },
    publisher: {
        type:String,
        required: true
    }
});
var Book = mongoose.model("Book",bookSchema);
// Export the module to the book 
module.exports = Book