const path = require('path');

//.dirname(__filename)

console.log("Directory of file :" + path.dirname(__filename));
console.log("Directory of file :" + path.extname(__filename));
//isAbsolute --> Determines if path is true or false

console.log(path.isAbsolute('C:\\Users\\Coding-Machine\\Node-jsTrainings'));
console.log(path.isAbsolute('Server'));

//Path.join --> Joins the al given path segments together using
//platform specific as a delimiter.

console.log(path.join('file1','file2','file1/file2'));

//path.normalize() ---> Normalizes the given path

console.log(path.normalize('g:/define//machine//time///linux'));
//path.parse() --> method returns an object whose properties
//represtns significant elements of that.

console.log(path.parse('/home/user/dir/file.txt'));

console.log(path.parse('C:\\Users\\Coding-Machine\\Node-jsTraining'));