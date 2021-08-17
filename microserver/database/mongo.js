const MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

/*var db = MongoClient.connect(url, function(err, database){

    if(err)throw err;
    console.log("Database created successfully..!");
    database.close();
});*/

var db = MongoClient.connect(url, function(err, db){
    if(err)throw err;
    // below code is to create the collection in the database.
    // create db object.
    var dbo = db.db("ProjectDatabase");
    // Create data Object
    var dataobject = { name: 'Sachin' , age : 27 };
    // Map it to the collection
    dbo.collection('profile').insertOne(dataobject, function(err, data){
        if(err) throw err;
        console.log("Record inserted successfully..!");
        db.close();
    });
});

module.exports = db;