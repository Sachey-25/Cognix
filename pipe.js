// Pipe Streaming --> combining
// Parsing an infomration from input.txt to output.txt
var fs = require('fs');
var zlib = require('zlib'); // To compress the file
//create a readble stream
var readerStream = fs. createReadStream('input.txt');

//create a writer stream 
var writeStream = fs.createWriteStream('output.txt');

// Pipe the read and write opertions 
// read input.txt and write data to output.txt
readerStream.pipe(writeStream);

// Compress the file input.txt.gz
/*fs.createReadStream('input.txt').pipe(zlib.createGzip()).pipe(
    fs.createWriteStream('input.txt.gz')
);
console.log("File Compressed successfully");*/

fs.createReadStream('input.txt.gz').pipe(zlib.createGunzip()).pipe(
    fs.createWriteStream('input.txt'));
//console.log("File Decompressed successfully");

console.log("Program ended");

