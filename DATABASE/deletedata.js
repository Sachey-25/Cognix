var MongoCLient = require('mongodb').MongoClient;
// MongoClient is used as alias 
var url = "mongodb://localhost:27017/";
MongoCLient.connect(url, function(err, db){
    if(err)throw err;
    var dbobject = db.db('mydb');
    // I want to find only an address
    var query = {address : "Bidar"};
    // If i dont know what data is present the database. 
    var query = {address : /^0/ }
    dbobject.collection("employee").deleteOne(query,function(err,result){
        if(err)throw err;
        console.log(result); });
    // Sort Method  --
    // Is the method to sort the result in ascending or decending order
    // sort () method takes one parameter, an object defining the 
    // sorting order.
});

// deletemany(varibale, callback(err, obj){});