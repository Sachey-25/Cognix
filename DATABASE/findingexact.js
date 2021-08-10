var MongoCLient = require('mongodb').MongoClient;
// MongoClient is used as alias 
var url = "mongodb://localhost:27017/";
MongoCLient.connect(url, function(err, db){
    if(err)throw err;
    var dbobject = db.db('mydb');
    // I want to find only an address
    var query = {address : /^S/};
    dbobject.collection("employee").find(query).toArray(function(err,result){
        if(err)throw err;
        console.log(result);
    // Sort Method  --
    // Is the method to sort the result in ascending or decending order
    // sort () method takes one parameter, an object defining the 
    // sorting order.
console.log("------Sorted data as follows-------");
    var orange = { age : -1, name : 1};
    dbobject.collection("employee").find().sort(orange).toArray(function(err,data){
        if(err) throw err;
        console.log(data);
        db.close();
    });
    });
});