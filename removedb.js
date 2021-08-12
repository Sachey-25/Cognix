var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/EmployeeDB";

MongoClient.connect(url, function(err,db) {
        if(err)throw err;
        console.log("EmployeeDb is created");

   /* var dbo = db.db("EmployeeDB");
    dbo.createCollection("Employee",function(err,data){
        if(err)throw err;
        console.log(" 'Employee' Collection Created");
    }); */

    var remove_data ={ EmplouyeeCity : "Bangalore" }
    var dbo = db.db("EmployeeDB");

    //Remove method
    dbo.collection("Employee").remove(remove_data, function(err, result){
        if(err) throw err;
        console.log("The below record is been removed")
        console.log(result );
        db.close();
    });
});