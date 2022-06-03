import fs from 'fs'; 
export const create = async () => {
    const content = 'I am fresh and young';
    fs.access('./src/fs/files', fs.constants.R_OK, (err) => {
        console.log('\n> Checking whether the folder exists');
        if (err) {
            console.error('No Folder. We will create the folder.');
            fs.mkdirSync('./src/fs/files');
        }
        else {
            console.log('Folder exists')
        }
        fs.access('./src/fs/files/fresh.txt', fs.constants.R_OK, (err) => {
            console.log('\n> Checking whether the file exists');
            if (err) {
                fs.writeFile('./src/fs/files/fresh.txt', content, err => {
                    if (err) {
                        throw new Error('FS operation failed.')
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
    });
};



await create();