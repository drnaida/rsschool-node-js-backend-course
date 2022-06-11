import fs from 'fs';
export const remove = async (whatToDelete) => {
    return new Promise((resolve, reject) => {
        fs.unlink(whatToDelete, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve('File succesfully deleted');
            }
        });
    });
};