import fs from 'fs';
import path from 'path';
import { getPath } from './isPathAbsolute.js';
export const copy = async (whatToRead, whereToCopy) => {
    const the_path_read = getPath(whatToRead);
    const the_path_copy = getPath(whereToCopy);
    const fileName = the_path_read.split('\\').slice(-1)[0] ;
    const whereToWrite = path.join(the_path_copy, fileName);
    const readableStream = fs.createReadStream(the_path_read);
    const writableStream = fs.createWriteStream(whereToWrite);

    readableStream.setEncoding('utf8');
    return new Promise((resolve, reject) => {
        writableStream.on('finish', resolve);
        writableStream.on('error', () => {
            reject('Operation failed');
        });
        readableStream.on('error', () => {
            reject('Operation failed');
        })
        readableStream.pipe(writableStream);
    })
};