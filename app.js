var log = {
    info : function(info){
        console.log('info ' + info);
    },
    warning:function(warning){
        console.log('warning' + warning);
    }
};
//module.exports =<local varibale_name>;
module.exports = log;
//I wanted to load the app.js for execution purpose.
// within my node.js application 
