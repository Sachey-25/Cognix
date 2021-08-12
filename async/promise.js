/* Callbacks are known for asynchronous events. but sometimes
call back functions would be difficult to nested methodologies,
this may leads to code complexity.*/

//What are Promise--> This an enhancement to the callback function 
/* node.js  
var MongoClient = requre('mongodb').MongoClient;
var url = 'mongodb://localhost/EmployeeDb';
MongoClient.connect(url, function(err, db){}); // here function is callback
db.collection("employee").updateOne{
    {"EmployeeName": "NewEmployee"},
    {
        $set : {"employeeName": "Sachin"}
    }
};*/
// Syntax:
//var promise = dosomethingAsync()
//promise.then(onFulFilled, onRejected)
/*dosomethigAsync is any callback or asynchronous function 
which does something sort of Processing.*/
/* This time when defining the callback, there is a value which is returned
called a promise*/

/* When a promise is returned, it can have 2 outputs, This is defined by the
'then clause' either the operation can be success which is denoted by the 
'onFulFilled parameter' or it can have an error which is denoted by the
'onRejected parameter*/


