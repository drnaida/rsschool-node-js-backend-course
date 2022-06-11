import fs from 'fs';
export const create = async (fileName) => {
    const currDir = process.cwd();
    const pathToCreateFile = `${currDir}/${fileName}`;
    const whereToWrite = fs.createWriteStream(pathToCreateFile);
    whereToWrite.write('', ()=> {
        let currDir = process.cwd();
        console.log(`You are currently in ${currDir}`);
    });
};