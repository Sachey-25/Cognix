const mongoose = require ('mongoose');
// Create the schema for the data / record into the mongoDb
var custSchema=new mongoose.Schema({
    //Name, Age, addresss
    name :{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    }
});

var Customer = mongoose.model("Customer",custSchema );
//Export the model to the customer
module.exports = Customer;