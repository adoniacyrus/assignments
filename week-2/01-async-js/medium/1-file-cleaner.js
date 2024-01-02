// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```


const fs = require('fs');

const fileCleaner = (filePath) => {
    return new Promise((resolve, reject) => {
        // Read the file asynchronously
        fs.readFile(filePath, 'utf-8', (readErr, data) => {
            if (readErr) {
                reject(readErr);
                return;
            }

            // Remove extra spaces using a regular expression
            const cleanedContent = data.replace(/\s+/g, ' ').trim();

            // Write the cleaned content back to the same file
            fs.writeFile(filePath, cleanedContent, 'utf-8', (writeErr) => {
                if (writeErr) {
                    reject(writeErr);
                } else {
                    resolve('File cleaned successfully!');
                }
            });
        });
    });
};

const filePath = 'sample.txt';

fileCleaner(filePath)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.error('Error cleaning the file:', error);
    });
