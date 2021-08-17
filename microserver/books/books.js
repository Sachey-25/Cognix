// Three business logics where books needs be ordered .
// Using mongodb, node.js and express.js
// Required modules to strengthen my application.
// Express , Body-Parser, Mongodb, Mongoose, 

//Load express module. 
const express = require('express');
const db = require('../database/mongo.js')
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());



// Load mongoose 
const mongoose = require('mongoose');

require("./book")
const book = mongoose.model("book")
//Sending a response to the server
app.get('/', (request, response) => {
    response.send("Hello Microservice! We have hosted mongodb");
});

// Post method -- to read the data/record.
app.post('/book', (request, response) => {
    var newBook = {
        title:request.body.title,
        authour:request.body.author,
        numberPages: request.body.numberpages,
        publisher:request.body.publisher        
    }
    // create a new book 
    var book = new book(newBook)
    book.save().then (() => {
        console.log("New Book Created successfully");
    }).catch((err) => {
        if(err)throw err;
    })
    respond.send("A new book created with success!");
});
//create Server 
app.listen(3030, () => {
    console.log("Server is up and running fine!!! <--- This is our book service");
});
