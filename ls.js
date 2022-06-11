import fs from 'fs';

export const list = async () => {
  return new Promise((resolve, reject) => {
    const currDir = process.cwd();
    fs.readdir(currDir, (err, files) => {
        if (err) {
          reject(err);
        }
        else {
          resolve(files);
        }
    })
  })
};