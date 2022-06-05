import fs from 'fs';
export const remove = async () => {
    const path = 'src/fs/files/fileToRemove.txt'

    fs.unlink(path, (err) => {
        if (err) {
            throw new Error('FS operation failed')
        } else {
            console.log('File succesfully deleted')
        }
    })
};

await remove();