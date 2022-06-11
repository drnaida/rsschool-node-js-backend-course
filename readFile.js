import fs from 'fs';
import process from 'process';
export const read = async (whatToRead) => {
    const content = fs.createReadStream(whatToRead, 'utf8');
    content.on("data", (chunk) => {
        console.log(chunk);
    });
    content.on('close', () => {
        let currDir = process.cwd();
        console.log(`You are currently in ${currDir}`);
    })
};
