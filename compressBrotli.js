import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { getPath } from './isPathAbsolute.js';
export const compressBrotli = async (pathToFile, pathToDestination) => {
    const the_path_file = getPath(pathToFile);
    const the_path_destination = getPath(pathToDestination);
    const the_path_destination_file = path.join(the_path_destination, path.basename(the_path_file)) + '.br';
    const readStream = fs.createReadStream(pathToFile);
    const writeStream = fs.createWriteStream(the_path_destination_file);
    const brotli = zlib.createBrotliCompress();
    const stream = readStream.pipe(brotli).pipe(writeStream);

    stream.on('finish', () => {
        let currDir = process.cwd();
        console.log(`You are currently in ${currDir}`);
    });
};