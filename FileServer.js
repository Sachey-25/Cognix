//To create server http module imported
var http = require ('http');
// to deal with files fs module imported
var filesystem = require('fs');
// to work with url contents url module imported.
var url = require('url');

//to create server -- createServer method nd a callback function.
http.createServer(function(request,response){
    var query = url.parse(request.url, true);
    var filename = '.' + query.pathname;

    filesystem.readFile(filename, function(error, data){
        if(error){
            response.writeHead(404,{'Content-Type':'text/html'});
            return response.end("404 Not Found");
        }
        response.writeHead(200,{'Content-Type':'text/html'});
        response.write(data);
        return response.end();
    });
}).listen(3000);
console.log("FIle Server Executed and listening to port 3000");