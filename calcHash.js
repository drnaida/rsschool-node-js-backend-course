import crypto from 'crypto';
import fs from 'fs';
import { getPath } from './isPathAbsolute.js';
export const calculateHash = async (pathToFile) => {
    const the_path = getPath(pathToFile);
    return new Promise((resolve, reject) => {
        const hash = crypto.createHash('sha256');
        const stream = fs.createReadStream(the_path);
        stream.on('error', err => reject(err));
        stream.on('data', chunk => hash.update(chunk));
        stream.on('end', () => resolve(hash.digest('hex')));
    });
};