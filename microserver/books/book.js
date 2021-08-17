const mongoose = require('mongoose');
// I need to create a model -- mongo model which understands the records
mongoose.model('book', {
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
        required: false
    }
});