import fs from 'fs';
import { getPath } from './isPathAbsolute.js';
import path from 'path';
export const rename = async (whatToRename, newName) => {
    const the_path = getPath(whatToRename);
    const howToRename = path.join(path.dirname(the_path), newName);
    return new Promise ((resolve, reject) => {
        fs.access(howToRename, fs.constants.R_OK, (err) => {
            if (err) {
                
                    fs.rename(the_path, howToRename, (error) => {
                        if (error) {
                            reject('Operation failed');
                        } else {
                            resolve('File renamed');
                        }
                    }); 
                
            }
            else {
                reject('Operation failed');
            }
        });
    });
};
