var fs = require('fs'); // Imprted the FS module
const { WriteStream } = require('node:fs');
var data = "We are learning Something new today";
// Create a wriatble stream
var writerStream = fs.createWriteStream('output.txt');
 // writerstream end
// in writerstream we will use events of Finish and Error
//Copleting the writeStream on Output.txt file
writerStream.on('finish',function(){
    console.log('Write COmpleted');
});
//Checking for Error
writerStream.on('error', function(err){
    console.log(err.stack);
});
console.log("Program Ended");
writerStream.end();