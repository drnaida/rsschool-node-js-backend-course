import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { getPath } from './isPathAbsolute.js';
export const compressBrotli = async (pathToFile, pathToDestination) => {
    const the_path_file = getPath(pathToFile);
    const the_path_destination = getPath(pathToDestination);
    const the_path_destination_file = path.join(the_path_destination, path.basename(the_path_file)) + '.br';
    fs.access(the_path_file, fs.constants.R_OK, (err) => {
        if (err) {
            console.log('Operation failed');
            let currDir = process.cwd();
            console.log(`You are currently in ${currDir}`);
        }
        else {
            const readStream = fs.createReadStream(pathToFile);
            const writeStream = fs.createWriteStream(the_path_destination_file);
            const brotli = zlib.createBrotliCompress();
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
            stream.on('error', () => {
                console.log('Operation failed');
                let currDir = process.cwd();
                console.log(`You are currently in ${currDir}`);
            });
            stream.on('finish', () => {
                let currDir = process.cwd();
                console.log(`You are currently in ${currDir}`);
            });
        }
    });
};