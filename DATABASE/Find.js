// Find Some 
// The second parameter of te find() method is the
// projection object that describes which field to include
// in the result

var MongoCLient = require('mongodb').MongoClient;
// MongoClient is used as alias 
var url = "mongodb://localhost:27017/";

MongoCLient.connect(url, function(err, db){
    var dbobject = db.db('mydb');
    dbobject.collection("employee").find({},{projection :{_id:0, name:1, address: 1}
    }).toArray(function(err,result){
        if(err)throw err;
        console.log(result);
    console.log("--------------------------------------------");
    // Checking for another result by the below code
    dbobject.collection("employee").find({},{projection :{address: 1}
    }).toArray(function(err,result){
        if(err)throw err;
        console.log(result);

    dbobject.collection("employe").find({}).toArray()
});
});
});
