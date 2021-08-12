var P = require('p');

//function which suppose to revert me with a promise 
function square() {
    var number_one = 10;
    var result = number_one*number_one;
    return result;
}

//Resulting Variable -- Store te funtion info
//var result_promise = P.denodeify(square);
/*var promise = dosomethingAsync()
promise.then(onFulFilled, onRejected) */
var promise = square;
promise.then(console.log("Square of the given number is :" + result));