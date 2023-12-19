// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 


const fs = require ('fs');

const fileRead = (filePath) =>{
    return new Promise((resolve, reject) =>{
        fs.readFile("sample.txt", 'utf-8', (err,data) =>{
            if (err){
                reject(err);
            }
            else{
                resolve(data);
            }
        });
    });
};

const expensiveOperation = () =>{
    for(i=0;i<1000000000; i++){

    }
    console.log("Expensive operation is completed");
}

const filePath = 'sample.txt';

fileRead(filePath)
.then((fileContents) =>{
    console.log('File Contents:', fileContents);
    expensiveOperation();
  })
  .catch((error) => {
    console.error('Error reading file:', error);
  });

