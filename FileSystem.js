var filesystem = require('fs');
//var fs = require('fs');
/*Common uses of the files sytem.
1. Read files
2. Create file
3. update files
4. delte files
5. Rename files */
var http = require ('http');
http.createServer(function(request,respond){
    //Read files 
    // Open a file on the server and return its content
    filesystem.readFile('Example.html',function(error, data){
        respond.writeHead(200, {'Content-Type':'text/html'});
        respond.write("Reading the data of the file : Example.html" + data);
        return respond.end();
    });c
}).listen(3000);
console.log("Localhost is listening to port 3000");
