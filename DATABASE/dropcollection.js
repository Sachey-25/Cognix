var MongoClient = require ('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
MongoClient.connect(url, function(err,db){
    if(err) throw err;
    var dbobject = db.db('mydb');
    dbobject.collection("employee").drop(function(err, drop){
        if(err) throw err;
        if(drop) // Drop mechnism true
        console.log("Collection deleted");
        db.close();
    });
});