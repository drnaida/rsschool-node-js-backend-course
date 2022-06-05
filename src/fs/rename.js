import fs from 'fs';

export const rename = async () => {
    const path_to_file_to_be_renamed = 'src/fs/files/properFilename.md';
    fs.access(path_to_file_to_be_renamed, fs.constants.R_OK, (err) => {
        console.log('\n> Checking whether the folder exists');
        if (err) {
            fs.rename('src/fs/files/wrongFilename.txt', path_to_file_to_be_renamed, (error) => {
                if (error) {
                    throw new Error('FS operation failed')
                } else {
                    console.log('File renamed');
                }
            }); 
        }
        else {
            console.error('File already exists');
            throw new Error('FS operation failed')
        }
    });
};

await rename();