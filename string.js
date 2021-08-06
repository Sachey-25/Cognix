var http = require ('http');
var string = "hello world";
http.createServer(function(request,response){
    var String = string.toupperCase();
    response.writeHead(200);
    response.write(String);
    respose.end();
}).listen(3000);

var uppercase = require('upper-case');
var http = require('http');
http.createServer(function(request,response){
    respose.writeHead(200);
    respose.write(uppercase.upperCase("helloworld"));
    respose.end();
}).listen(3000);