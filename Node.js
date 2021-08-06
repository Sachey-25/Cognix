var http = require('http');
http.createServer(function(request,response){
    reponse.writeHead(200,{'Content-Type': 'text/html'});
    response.write(
        '<form action="fileupload"method="post"enctype="multipart/form-data">');
    response.write(
        '<input type="file" name ="fileupload"><br> ');
    response.write(
        '<input type="submit">');
        res.write('</form>');    
    }).listen(3000);
    console.log("LocalServer listening to port 3000");