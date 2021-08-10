var express = require('express');
var mongoose = require('mongoose');
var passport = require('passport');
var bodyParser=require('body-parser');
var LocalStrategy=require('passport-local'); // This is for Node.js
var passportLocalMongoose = require('passport-local-mongoose'); // This is for mongodb

User = require("./models/user");

// Create and set the mongodatabase for auth and auth
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
mongoose.connect("mongodb://localhost/auth_demo_app");

//Express module
var app = express();
app.set("view engine","ejs");
app.use(bodyParser.urlencodded({extended:true})); // Strting the server 

app.use(require("express-session")({
    secret : "Green is a Colour",
    resave : false,
    saveUninitialized : false
}));

app.use(passport.initialize());
app.use(passport.session()); // Server session is started in the node.js

passport.use(new LocalStrategy(user.authencate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//==================
// ROUTES  ----> Navigation between files i.e, one after next
//=================================================
//showing home page
app.get("/", function(req,res){
    response.render("home");
})
// showing secret file
app.get("/secret", isLoggedIn, function(req,res){
    res.render("Secret");
});
// Showing register page
app.get("/register", function(req,res){
    response.render("register");
})

// Handling the user singup

app.post("/register", function(req, res){
    var username = req.body.username;
    var password = req.body.password;

    User.regoster(new User({ username : username }),
    password, function(err, user){
        if(err){
            console.log(err);
            return res.render("register");
        }
        passport.authenticate("local")(
            req,res,function(){
                res.render("secret");
            });
    });
    });
    //Show login form
    app.get("/Login", function (req, res){
        res.render("login");
    });

    // Handling user login

    app.post("/Login", passport.authenticate("local", {
        successRedirect : "/secret",
        failureRedite : "/Login"}), function (req, res){

        });

// Handling User logout

app.get("/Logout", function(req,res){
    req.logout();
    res.redirect("/");

    function isLoggedIn(req, res, next){
        if(req.isAuthenticated()) return next();
        res.redirect("/Login");
    }
    var port = process.env.PORT || 3000;
    app.listen(port, function(){
        console.log("Server Has Sarted at port : 3000 and listening");
    });
});


