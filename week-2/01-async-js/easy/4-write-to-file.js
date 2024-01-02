// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');

const fileRead = (filePath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
};

const fileWrite = (filePath, content) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, 'utf-8', (err) => {
            if (err) {
                reject(err);
            } else {
                resolve('File has been written successfully!');
            }
        });
    });
};

const expensiveOperation = () => {
    for (let i = 0; i < 1000000000; i++) {
        // Simulating an expensive operation
    }
    console.log("Expensive operation is completed");
};

const filePath = 'sample.txt';

fileRead(filePath)
    .then((fileContents) => {
        console.log('File Contents:', fileContents);

        // Append some content to the file
        const additionalContent = '\nAppended content.';

        return fileWrite(filePath, fileContents + additionalContent);
    })
    .then((writeResult) => {
        console.log(writeResult);
        expensiveOperation();
    })
    .catch((error) => {
        console.error('Error reading or writing file:', error);
    });
