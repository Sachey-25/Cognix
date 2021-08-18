// Three business logics where books needs be ordered .
// Using mongodb, node.js and express.js
// Required modules to strengthen my application.
// Express , Body-Parser, Mongodb, Mongoose, 
//Load express module. 
const express = require('express');
const db = require('../database/mongo.js')
const app = express();
const bodyParser = require('body-parser');
const Book = require('./book');
app.use(bodyParser.json());
// Load mongoose 

//Sending a response to the server
app.get('/', (request, response) => {
    response.send("Hello Microservice! We have hosted mongodb");
});

// Rotung to the books with the data sent through Postman.
app.get("/books",(req,res)=>{
    Book.find().then((books)=>res.status(200).send(books)
).catch((e)=>res.status(404).send(e))
});

// Add every ID of the books into a root folder.

app.get("books", (request,repsonse) => {
    Book.find().then ((books) => {
        response.json(books)
    }).catch( err => { if(err) { throw err; }})
})

app.get("/books/:id", (request, response) => {
    //response.send(request.parameter.id)
    Book.findById(request.params.id).then((book) => {
        // I need to foucus ID of the books stired in the Db
        if(book){
            //Book data
            response.json(book)
        }else{
            response.sendStatus(404);
        }
    }).catch(err => {
        if(err){
            throw err;
        }
    })
})

// I wanted to delete the data/record

// FindOnAndRemove method will remove the instance which 
// is entered first ---> FIFO
app.delete("/books/:id", (request, response) => {
    Book.findOneAndRemove(request.params.id).then(() => {
        response.send("Book Removed successfuly");
    }).catch(err => {
        if(err) throw err;
        })
});
// FindByIDANdDelete method deletes/removes the instance from the user 
// selects,
app.delete("/books/:id", (request, response) => {
    Book.findByidAndDelete(request.params.id).then(() => {
        response.send("Book Removed successfuly");
    }).catch(err => {
        if(err) throw err;
        })
});

// Post method -- to read the data/record.
app.post("/books", (request, response) => {
    console.log("Response received....!");
    console.log(request.body);
// model object fr the book.
    var book = new Book({
        title : request.body.title,
        author : request.body.author,
        numberPages: request.body.numberPages,
        publisher : request.body.publisher
    })
    // create a new book 
    book.save().then ((book) => {
        console.log("New book created successfully..!");
        return response.status(200).send(book);
    }).catch((e) => {
        console.log("Error caught and handled too..", e);
        return response.status(404).send(e);
    })
});   
    
//create Server 
app.listen(3030, () => {
    console.log("Server is up and running fine!!! <--- This is our book service");
});
