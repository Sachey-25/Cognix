var express = require('express'); // INclude ExpressJS
// Create an Express Application
var app = express();
// Include and use the body-parser
var bodyParser = require('body-parser'); //Middleware
// Application is going to use body-parser
app.use(bodyParser.urlencoded({ extended:false}));
/*.urlencoded indicated that we are parsing URL encoded data from the body.
When working with forms, We use the urlencoded parser. 
Because by default, forms send data in URL encoded format.
--> Extended is an option allowing you to choose which library you want to use
to parse the URL encoded data. 
by defualt this option is set to true and will use the qs library, when 
to set false, this will use QueryString library. */
// Set up the routes for Our GET requests
// Return to HOme page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home/index.html');
  });
// Route to Login Page
app.get('/login', (req,res) => {
    res.sendFile(__dirname + '/home/login.html');
});
console.log("Everythign is fine");
// Set up a route for POST request
app.post('/login', (req,res) => {
    //Insert Login Code 
    let username = req.body.username;
    let password = req.body.password;
    res.send(`Username : ${username} Password : ${password}`);
});
// Assign the port
var port = 3000; // Port we will listen on
app.listen(port, () => console.log(`This is listening to port ${port}`));