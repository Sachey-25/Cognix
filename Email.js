var nodemailer = require('nodemailer');
var send_service = nodemailer.createTransport({
    service : 'gmail',
    auth:{
        user:'youremail@gmail.com',
        pass:'yourpassword'
    }
});
//Composing the email 
var mailOptions ={
    from : "youremail@gmail.com",
    to : "example@gmail.com",
    subject : "Hey! Greetings email",
    text : "Hey friend, Good mornign to you !!!!"
};

// Creatung the server 
send_service.sendMail(mailOptions, function(error, info){
    if(error){
        console.log("There is an internal error");
    }else{
        console.log("EMail sent "+ info.response);
    }
});
