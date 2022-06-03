import fs from 'fs';

export const list = async () => {
    fs.readdir('src/fs/files', (err, files) => {
        if (err)
          throw new Error('FS operation failed')
        else {
          console.log("Filenames in the folder:");
          files.forEach(file => {
            console.log(file);
          })
        }
    })
};

await list();