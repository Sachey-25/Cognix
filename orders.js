const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const db = require('../database/mongo.js');
const Order = require('./Order');
const axios = require('axios');

app.use(bodyParser.json());

app.get("/orders", (request,response) => {
    Order.find().then((orders) => response.status(200).send(orders)
    ).catch((e) => response.status(404).send(e))
});

app.get("/orders", (request,response) => {
    Order.find().then((orders) => {
        response.json(orders)
    }).catch((err) => { if (err) throw err ; })
    });
// Post method -- to read the data/record

app.get("/order/:id", (request,response) => {
    Order.findById(request.params.id).then((order) => {
        if(order){
        axios.get("https://localhost:3000/customer" + 
        order.CustomerID).then((response) => {
            var orderObject = {customeName : response.data.name, 
                bookTitle: ''}
                
            axios.get("http://localhost:3030/book" 
            + order.BookID).then((reponse) => {
    orderObject.bookTitle = response.data.title
    response.json(orderObject)
})        });
        }else{
            response.send("Invalid ID!")
        }
    })
});



app.post("/orders", (request,response) => {
    console.log("Response Recieved");
    console.log(request.body);

    //Model object for order details
    var order = new Order({
        CustomerID : mongoose.Types.ObjectId(request.body.CustomerID),
        BookID : mongoose.Types.ObjectId(request.body.BookID),
        InitialDate:request.body.InitialDate,
        deliveryDate:request.body.deliveryDate
    })
    //Create new Order Object
    order.save().then((Order) => {
        console.log("Order Created Successfully")
        return response.status(200).send(Order)
    }).catch((e) => {
        console.log("Error Occured..!!")
        return response.status(404).send(e)
    })
})
app.get("/", (request,response) => {
    response.send("Microservice <--- This is Order Service")
});

//Server listing to the port 8080
app.listen(8080, () => {
    console.log("up and running fine - Order Service");
}) 