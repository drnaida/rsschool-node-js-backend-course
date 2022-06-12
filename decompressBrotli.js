import fs from 'fs';
import zlib from 'zlib';
import path from 'path';
import { getPath } from './isPathAbsolute.js';
export const decompressBrotli = async (pathToFile, pathToDestination) => {
    const the_path_file = getPath(pathToFile);
    const the_path_destination = getPath(pathToDestination);
    const without_br = path.basename(the_path_file, '.br');
    const the_path_destination_file = path.join(the_path_destination, without_br);
    const readStream = fs.createReadStream(the_path_file);
    const writeStream = fs.createWriteStream(the_path_destination_file);
    const brotli = zlib.createBrotliDecompress();
    const stream = readStream.pipe(brotli).pipe(writeStream);
    stream.on('finish', () => {
        let currDir = process.cwd();
        console.log(`You are currently in ${currDir}`);
    });
};