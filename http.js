// Code module http is loaded
var myfirstlocalhost = require('http');

//Creating a server
myfirstlocalhost.createServer(function(request,response){
    response.writeHead(200); //status code 200 is know active webserach
    response.write("Welcome to Node.js Training");
    response.end();
}).listen(3000);
console.log("LocalHost is established and listing to the port 3000");