var MongoClient=require('mongodb').MongoClient;// We need to import mongo client
var url = "mongodb://localhost:27017/"; 

//Create DB connection with a call function
MongoClient.connect(url, function(err,db){
    if(err)throw err;
    var dbo = db.db("mydb");
    //Create dat objects or data-record
    var dataobj = [{ name : "TechMasters inc " ,
                    address: "Bidar, Karnataka ",
                    Known_for : "Quality Training" },
                    {name:"sachin",age:"27",city:"Bangalore"},
                    {name:"pratik",age:"12",city:"Mysore"},
                ];
    //Inserting the record into employee table
    dbo.collection("employee").insertMany(dataobj, function(err,response){
        if(err)throw err; // checking the errors
        console.log("multiple documents inserted");
        console.log("Number of records inserted " + response.insertedCount);
        db.close() // Closing the database.
    });
})