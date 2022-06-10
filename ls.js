import fs from 'fs';

export const list = async () => {
    const currDir = process.cwd();
    fs.readdir(currDir, (err, files) => {
        if (err)
          throw new Error('FS operation failed')
        else {
          console.log("Filenames in the folder:");
          console.log(files);
        }
    })
};