// Async
/*async function name (para1, para2, para3 .... paraN){
    // code 
}*/

const { markAsUntransferable } = require("worker_threads");

async function fun(){
    console.log("This is printing from Async function");
    return Promise.resolve("Sachin");
}
fun();

// 1. We can run our async function without promise parameter value.
// 2. we can run oyr async function with promise parameter value i.e.., 
//Chanignthe promise -- using the then().
async function fun1(){
    console.log("This is printing from Async function");
    return Promise.resolve("Sachin");
}
    fun1().then(function(result){
        console.log(result);
    });

//await()  --> -->Time interval --> server wait some time 

//let result = await Promise;

// a promise
let promise = new Promise (function(resolve, reject){
    setTimeout(function(){
        resolve('promise resolved')}, 5000);
    });
   
// Async function
async function asyncfunc(){
    let result = await Promise;
    console.log(result);
    console.log("Responing after 5 seconds");
    console.log("Hello to the world from Await function");
}
asyncfunc();

/*The async function allwows the asynchronous method to be executed in 
seemigly synchronous way, Thought he operation is asynchronous.
it seems that the operation is executed in synchronous manner.*/
// this code is for if we have multiple promises.
let promise_one;
let promise_two;
let promise_three;

async function asyncfun(){
    let result_one = await promise_one;
    let result_two = await promise_two;
    let result_three = await promise_three;

    console.log(result_one);
    console.log(result_two);
    console.log(result_three);
}

// Handling an error
/*async function().catch(
    //
)*/


// create a promise
let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('Promise got the response ans its resolved')} , 6000);

});
// Async function 
async function asyncfunction() {
    try{// wait until the promise resolves / executes
        let resul = await promise;
        console.log(result);
        console.log("Promise is waited for 6 seconds and executed further");}
    catch(error){
    console.log(error);
}
}
// calling the async function
asyncfunction(); // Promise resolved.