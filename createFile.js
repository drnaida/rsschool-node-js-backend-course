import fs from 'fs';
export const create = async (fileName) => {
    const currDir = process.cwd();
    const pathToCreateFile = `${currDir}/${fileName}`;
    fs.access(pathToCreateFile, fs.constants.R_OK, (err) => {
        console.log('\n> Checking whether the file exists');
        if (err) {
            fs.writeFile(pathToCreateFile, '', err => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('File was written')
                }
            });
        }
        else {
            console.log('File already exists')
            throw new Error('FS operation failed.')
        }
    });
};