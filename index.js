// Custom Server Creation   --> myserver --> localost :9999
const httpOperation = require('http');
const FileOperators = require('fs');
const path = require('path')
// Declaring variables
const hostname = "Localhost";
const port = 9999;
const server = httpOperation.createServer(request,respose)=>{
    if(request.method ==='GET')
    let fileUrl;
    if(request ==='/')
    {
        fileUrl = "/index.html"
    }else {
        fileUrl =request.url;
    }

    let filePath = path.resolve('./HTML' +fileUrl);
    const fileExt = path.extname(filepath);
    if(fileExt === './html');
    {
        FileOperators.exists(filePath,(isExists) => {
            if(isExits){
                response.statuscode =200;
                response.setHeader('Content-Type','text/html');
                FileOperators.createReadStream(filepath).pipe(respose);
            }else{
                showError(response,fileUrl, 'is not exists');
            }
        });
    }else {
        showError(reponse,fileUrl, "Is not HTML file.";)
    }
}else{
    shoeError(response,fileUrl, "is not Get method");
}
});
function showError(response, fileUrl, errorMsg){
    response.statuscode =404;
    response.setHeader('Content-Type','T\text/html');
    response.end('<html><body><h1>Error 404' + fileUrl + ' ' 
    + errorMsg +'</h1></body></html>');
}
server.listen(port,hostname, () => {
    console.log("Server run at http://${hostname}:${port");
}
});