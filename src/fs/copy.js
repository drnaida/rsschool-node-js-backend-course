import fs from 'fs'; 
export const copy = async () => {
    const options = {
        recursive: true,
        force: false,
        errorOnExist: true,
    }
    fs.cp('./src/fs/files', './src/fs/files_copy', options, (err) => {
        if (err) {
            throw new Error('FS operation failed');
        } else {
            console.log('Folder was successfully copied');
        }
    }) 
};

await copy();