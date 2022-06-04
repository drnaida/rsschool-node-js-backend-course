import zlib from 'zlib';
import fs from 'fs';
export const decompress = async () => {
    const unzipper = zlib.createUnzip();
    const fileToUnzip = fs.createReadStream('./src/zip/files/archive.gz');
    const writeTheContent = fs.createWriteStream('./src/zip/files/fileToCompress.txt');
    fileToUnzip.pipe(unzipper).pipe(writeTheContent);
};

await decompress();