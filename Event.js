var filesystem = require('fs');

// to create a file or open a file
var readfile = filesystem.createReadStream('./FileServer.js');

var writefile = filesystem.createWriteStream('./Magic.html');
writefile.on('write', function(){
    console.log('File is writable');
});

readfile.on('open', function(){
    console.log('The file is open');
});