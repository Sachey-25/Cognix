/* the filesystem create mechanism involves below methods
1. appendfile()
2. open()
writefile()
*/
var filesystem = require('fs');
//Creating the file and appending the data to that:
filesystem.appendFile('Example.html', 
'This statement is addedd!!! It says Hello_World', function(error){
    if(error) throw error;
    console.log("The new data saved successfully");
});
filesystem.open('MyFirstfile.html', 'w', function(Error){
    if (Error) throw Error;
    console.log("File opened Successfully");
});

//Inorder to open the file we need to know
// three terminologies 
// whether file is readable ---> 'r'  --> 
//whether file is writable ----> 'w'
// whether file is executable --> 'x'

// WriteFile ()
// --> is the method replaces (over-write) the specified file 
// and contents if it exists. if the file does not
// exits, a new file , contining the soecifed content
// will be created.
filesystem.writeFile('Magic.html', 
'This is the new content', function(error){
    if (error) throw error;
    console.log("New data has been added");
    console.log("This is the newly created file ");
    console.log("This is created by WriteFile ()");
});

// Update Files
// 1. appendFile()
// 2. WriteFile()

// Delete File
// 1. Unlink()

/*filesystem.unlink('Magic.html', function(error){
    if(error) throw error;
    console.log("File Deleted!!!!!");
    //Note : Example12345.html is already deleted..
});*/
//Rename 
filesystem.rename('FileSYSTEM.js','FileSystem.js', function(error){
    if (error) throw error;
    console.log("File namerenamed..");
});