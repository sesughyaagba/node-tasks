const fs = require('fs');

function renameFile(oldPath, newPath) {
    // Read the contents of the original file
    fs.readFile(oldPath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:',);
            return;
        }

        // Write the contents to the new file
        fs.writeFile(newPath, data, 'utf8', (err) => {
            if (err) {
                console.error('Error writing to new file:', err);
                return;
            }

            // Delete the original file
            fs.unlink(oldPath, (err) => {
                if (err) {
                    console.error('Error deleting original file:', err);
                    return;
                }

                console.log('File renamed successfully.');
            });
        });
    });
}


const oldFilePath = 'content.txt';
const newFilePath = 'rename.txt';

renameFile(oldFilePath, newFilePath);
