const express = require('express');
// start the applicaton
const app = express();
const bodyParser = require('body-parser');
const Customer = require('./Customer');
const mongoose = require('mongoose');
const db = require('../database/mongo.js');

app.use(bodyParser.json());
// Name, Age, Address
app.get("/", (request,response) => {
    response.send("This is customer service");
});

app.get("/customer", (request,response) => {
    Customer.find().then((customers) => response.status(200).send(customers)
    ).catch((e) => response.status(404).send(e))
});

app.get("/customer/:id", (request, response) => {
    //response.send(request.parameter.id)
    Book.findById(request.params.id).then((customer) => {
        // I need to foucus ID of the books stired in the Db
        if(book){
            //Book data
            response.json(customer)
        }else{
            response.sendStatus("Invalid ID!");
        }
    }).catch(err => {
        if(err){
            throw err;
        }
    })
})






// Send another request to server to read the data onto Json fomrat.
app.get("/customers", (request,response) => {
    Customer.find().then((customers) => {
        response.json(customers)
    }).catch(err => { if(err ) {throw err; }});
});

// Post method -- to read the data/record from the postman or to broswer.
app.post("/customers", (request, response) => {
    console.log("Response Received")
    console.log(request.body);
//Create an object for the customer model
var customer_details = new Customer({
    name: request.body.name,
    age: request.body.age,
    address : request.body.address
})

// Create a new customer object to store the record.
customer_details.save().then((Customer) => {
    console.log("New Customer record created successfully !!");
    return response.status(200).send(Customer);
}).catch((e) => { console.log("Error Occured !!!!" , e)
    return response.status(404).send(e)

})
});
//Server listening to port 3000!!!
app.listen(3000, () => {
    console.log("up and running <--- Customer Service ");
});