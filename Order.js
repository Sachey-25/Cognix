const mongoose = require ('mongoose');
// Create the schema for the data / record into the mongoDb
var orderSchema=new mongoose.Schema({
    //Name, Age, addresss
    CustomerID :{
        type:mongoose.SchemaTypes.ObjectId,
        required:true
    },
    BookID:{
        type:mongoose.SchemaTypes.ObjectId,
        required:true
    },
    InitialDate:{
        type:Date,
        required:true
    },
    deliveryDate:{
        type:Date,
        required:true
    }
});


var Order = mongoose.model("Order",orderSchema );
//Export the model to the Order
module.exports = Order;
