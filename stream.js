var fs = require('fs');
var data ="";
var email ="";
var readerStream = fs.createReadStream('input.txt');
var readerStream = fs.createReadStream('Email.js');
//readerStream.setEncoding('utf-8');
//Handle stream events ---> data, end and error
//Streams are the obects that facilitate to read data from source
// and write data to a destination.// in order to do that we have common events
// 1.data 2.end 3.error 4.finish
readerStream.on('data',function(info, info1){
    data += info;
    email += info1;
});
readerStream.on('end', function(){
        console.log(data); //end
        console.log(email);
});
readerStream.on('error', function(err){
    console.log(err.stack); // Checking for an error
});
console.log("Program ended"); //Finish

