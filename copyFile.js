import fs from 'fs';
import process from 'process';
export const copy = async (whatToRead, whereToCopy) => {
    const fileName = whatToRead.split('\\').slice(-1)[0] ;
    const whereToWrite = `${whereToCopy}/${fileName}`;
    const readableStream = fs.createReadStream(whatToRead);
    const writableStream = fs.createWriteStream(whereToWrite);

    readableStream.setEncoding('utf8');
    return new Promise((resolve, reject) => {
        writableStream.on('finish', resolve);
        readableStream.pipe(writableStream);
    })
};