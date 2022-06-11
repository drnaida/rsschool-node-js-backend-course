import fs from 'fs';
import process from 'process';
export const copy = async (whatToRead, whereToCopy) => {
    const fileName = whatToRead.split('\\').slice(-1)[0] ;
    const whereToWrite = `${whereToCopy}/${fileName}`;
    const readableStream = fs.createReadStream(whatToRead);
    const writableStream = fs.createWriteStream(whereToWrite);

    readableStream.setEncoding('utf8');

    readableStream.on('data', (chunk) => {
        writableStream.write(chunk, () => {
            let currDir = process.cwd();
            console.log(`You are currently in ${currDir}`);
        });
    });
};