var fs = require('fs');

console.log("This gives me file information");

fs.stat('input.txt', function(err, stats){
    if(err){
        return console.log(err);
    }
    console.log(stats);
    console.log("File information gathered successfully");
    // Check file type
    console.log("isFile ?" + stats.isfile()); //Ternary Operator
    console.log("IS directory ?" + stats.isDirectory());
});