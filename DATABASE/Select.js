// The findOne() method is used to select a single data
// from a collection in MongoDB. This method returns the first 
// record of the collection. 
var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
MongoClient.connect(url, function(err, db){
    if(err) throw err;
    var dbobject = db.db('mydb');
    dbobject.collection("employee").findOne({}, function(err,result){
        if(err)throw err;
        console.log(result.name);
        db.close();
    });
});