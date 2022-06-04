import fs, { write } from 'fs';
import zlib from 'zlib';
export const compress = async () => {
    const content = fs.createReadStream('./src/zip/files/fileToCompress.txt', 'utf8');
    const gzip = zlib.createGzip();
    const writeToFile = fs.createWriteStream('./src/zip/files/archive.gz');
    content.pipe(gzip).pipe(writeToFile);
};

await compress();