//Loading mongoose 
const mongoose = require('mongoose');

var CustSchema=new mongoose.Schema ({
    name:{
        type:String,
        required:true
    },
    age:{
        type:number,
        required:true
    },
    address:{
        type:String,
        required:true
    }
});

var Cust = mongoose.model("Book",CustSchema);
// Export the module to the book 
module.exports = Cust;