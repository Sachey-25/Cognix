// create a promise
let promise = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('Promise got the response and its resolved')} , 6000);
});
// Async function 
async function asyncfunction() {
    try{// wait until the promise resolves / executes
        let result = await promise;
        console.log(result);
        console.log("Promise is waited for 6 seconds and executed further");}
    catch(error){
    console.log(error);
}
}
// calling the async function
asyncfunction(); // Promise resolved.