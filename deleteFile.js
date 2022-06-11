import fs from 'fs';
import { getPath } from './isPathAbsolute.js';
export const remove = async (whatToDelete) => {
    const the_path = getPath(whatToDelete);
    return new Promise((resolve, reject) => {
        fs.unlink(the_path, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve('File succesfully deleted');
            }
        });
    });
};