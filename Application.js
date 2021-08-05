var calculation = require('./Calculation');

var number_one = 50; 
var number_two = 20;

console.log("Additon of 50 and 20 is " + 
    calculation.add(number_one,number_two));
console.log("Substraction of 50 and 20 is " + 
    calculation.sub(number_one,number_two));
console.log("Multiplication of 50 and 20 is " + 
    calculation.mul(number_one,number_two));
console.log("Additon of 50 and20 is " + 
    calculation.div(number_one,number_two));

