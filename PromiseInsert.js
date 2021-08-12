var Promise= require('promise');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/EmployeeDB";
MongoClient.connect(url)
.then(function(data){
    data.collection('Employee').insertOne({
        EmployeeID : "123456",
        EmployeeName : "Sachin",
        EmployeeDOJ : "10-Jun-2021",
        EmplouyeeCity : "Bangalore"
    })
    .then(function(data2){
        data2.collection('Employee').insertOne({
        EmployeeID : "234567",
        EmployeeName : "Rahul",
        EmployeeDOJ : "10-Jul-2021",
        EmplouyeeCity : "Bangalore"
        
    })
    .then(function(data3){
        data3.collection('Employee').insertOne({
            EmployeeID : "345678",
            EmployeeName : "Sourav",
            EmployeeDOJ : "10-Aug-2021",
            EmplouyeeCity : "Kolkatta"
    })
})
})



});
console.log("All the three records are inserted successfully");
