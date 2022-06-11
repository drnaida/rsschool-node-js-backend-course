import fs from 'fs';
import { getPath } from './isPathAbsolute.js';
export const rename = async (whatToRename, howToRename) => {
    const the_path = getPath(whatToRename);
    return new Promise ((resolve, reject) => {
        fs.access(howToRename, fs.constants.R_OK, (err) => {
            console.log('\n> Checking whether the folder exists');
            if (err) {
                fs.rename(the_path, howToRename, (error) => {
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