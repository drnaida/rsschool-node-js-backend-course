import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { getPath } from './isPathAbsolute.js';
export const decompressBrotli = async (pathToFile, pathToDestination) => {
    const the_path_file = getPath(pathToFile);
    const the_path_destination = getPath(pathToDestination);
    const without_br = path.basename(the_path_file, '.br');
    const the_path_destination_file = path.join(the_path_destination, without_br);

    fs.access(the_path_file, fs.constants.R_OK, (err) => {
        if (err) {
            console.log('Operation failed');
            let currDir = process.cwd();
            console.log(`You are currently in ${currDir}`);
        }
        else {
            const readStream = fs.createReadStream(the_path_file);
            const writeStream = fs.createWriteStream(the_path_destination_file);
            const brotli = zlib.createBrotliDecompress();
            const stream = readStream.pipe(brotli).pipe(writeStream);
            readStream.on('error', () => {
                console.log('Operation failed');
                let currDir = process.cwd();
                console.log(`You are currently in ${currDir}`);
                stream.destroy();
            })
            writeStream.on('error', () => {
                console.log('Operation failed');
                let currDir = process.cwd();
                console.log(`You are currently in ${currDir}`);
            })
            stream.on('finish', () => {
                let currDir = process.cwd();
                console.log(`You are currently in ${currDir}`);
            });
        }
    });
};