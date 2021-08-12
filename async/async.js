
// Create function to check request and response.
function function_one(request, response){
	return request.get('http://localhost:3000') // Requesting the server
	//handle the errors/exceptions
	.catch((err) => { console.log('Found Error'); // if no respose -- return error
}).then((response) => {
    console.log("Get request returned"); // response found -- returned with value
    console.log("Everything is fine");
});

}
// 