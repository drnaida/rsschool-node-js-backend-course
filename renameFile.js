import fs from 'fs';

export const rename = async (whatToRename, howToRename) => {
    return new Promise ((resolve, reject) => {
        fs.access(howToRename, fs.constants.R_OK, (err) => {
            console.log('\n> Checking whether the folder exists');
            if (err) {
                fs.rename(whatToRename, howToRename, (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve('File renamed');
                    }
                }); 
            }
            else {
                reject('already exists');
            }
        });
    });
};