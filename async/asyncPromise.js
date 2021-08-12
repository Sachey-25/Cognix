var Promise = require('promise');
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://127.0.0.1:27017/EmployeeDB";
MongoClient.connect(url).then(function(err, data){
    if(err)throw err;
    data.collection('Employee').insertOne({
        EmployeeID : "234567",
        EmployeeName : "Rahul",
        EmployeeDOJ : "10-Jun-2021",
        EmployeeCity: "Mumbai"
    })
    .then(function(data1){
        data1.collection('Employee').insertOne({
            EmployeeID : "345678",
            EmployeeName : "Sovrav",
            EmployeeDOJ : "11-Jun-2021",
            EmployeeCity: "Kolkatta"
    })
    .then(function(data2){
        data2.collection('Employee').insertOne({
            EmployeeID : "345678",
            EmployeeName : "Sovrav",
            EmployeeDOJ : "11-Jun-2021",
            EmployeeCity: "Kolkatta"
    })    
    console.log("Multiple records are inserted successfully"); 
});
});
});