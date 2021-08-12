// requiring the promise module
var Promise = require('promise');
var MongoClient =  require('mongodb').MongoClient;
var url = 'mongodb://localhost/EmployeDB'
//Database Connection
MongoClient.connect(url).then(function(err, db){
    var db = db.db("EmployeeDB");
    db.createCollection("Employee", function(err, response){
        if(err)throw err;
        console.log("Collection Created");
    });
    var data = {
        EmployeeID   : "123456",
        EmployeeName : "Sachin",
        EmplpoyeeDOJ : "9-Jun-2021",
        EmployeeCity : "Bangalore"        
    };
    db.collection("Employee").insertOne(data, function(err, data){
        if(err) throw err;
        console.log("Record Inserted Successfully");
    });

    db.collection("Employee").updateOne(
        {EmployeeID : "123456"},
        {$set : {
            EmployeeID : "654321"
        }
    });
});