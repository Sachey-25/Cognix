var MongoClient=require('mongodb').MongoClient;// We need to import mongo client
var url = "mongodb://localhost:27017/"; //

//Create DB connection with a call function
MongoClient.connect(url, function(err,db){
    if(err)throw err;
    var dbo = db.db("mydb");
    //Create dat objects or data-record
    var dataobj = { name : "TechMasters inc " ,
                    address: "Bidar",
                    Known_for : "Quality Training" };
    //Inserting the record into employee table
    dbo.collection("employee").insertOne(dataobj, function(err,response){
        if(err)throw err; // checking the errors
        console.log("1 document inserted");
        db.close() // Closing the database.
    });
});