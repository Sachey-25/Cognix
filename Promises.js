// A Promise may have one of three staages they are below
/*1. Pending
2. Fulfilled
3. Rejected.

A promise starts in apending state, That means the process is not complete. 
if the operation us successful, the process ends in a fullfilled state.
and, if an error occurs the  process ends in arejected state.

Exmaple: When you request a data from the server by using a promise,
it will be in a pending state. when the data arrives successfully It will
be on a fulfilled state. if an error occurs then, it will be in rejected state.*/

var Promise = require('promise');
// Create a promise
//let promise = new Promise(function(resolve,reject){
    //Do something
//});

//let sachin = new Promise(function(request,response){
  //  console.log("This is my custom promise.");
//});

/*The Promise() constructor talkes a function as an argument.
the function also accepts two functions resolve() and reject()
/If the promise returns successfully, the resolve() function is called.
and if the error occurs the reject () function is called.*/

//Javascript

const count = true;

let countValue = new Promise(function(resolve,reject){
    if(count){
        resolve("There is a count value"); // if the promise goes fine
        console.log("This works fine");
    }else{
        resolve("There is no count value"); // if the promise occurs an error
        console.log("This is not working fine.");
    }
});
console.log(countValue);

//Promise{<resolved> : "There is a count value."}

// Chaining the Promise with then()

let countt = true;

let counttValue = new Promise(function(resolve, reject){
    resolve("Promise resolved.....");
});
counttValue.then(function successValue(result){
    console.log(result);
}).then(function successvalue1(){
    console.log("You can call multiple functions this way....");
});

// the catch() method is used with the call backfunction when the 
//promise rejected or if an error occurs

let countvalue = new Promise (function(resolve, reject){
    resolve('Promise resolved');
});
// Below code executes of the promise resolved sucessfull.
countvalue.then(function successvalue (result){
    console.log(result);
},
)
.catch(function errorValue(result){
    console.log(result);
});
countvalue.finally(function final(){
    console.log("This code is executed in finally block");
});



















