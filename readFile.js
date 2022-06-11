import fs from 'fs';
import process from 'process';
import { getPath } from './isPathAbsolute.js';
export const read = async (whatToRead) => {
    const the_path = getPath(whatToRead);
    const content = fs.createReadStream(the_path, 'utf8');
    content.on("data", (chunk) => {
        console.log(chunk);
    });
    content.on('close', () => {
        let currDir = process.cwd();
        console.log(`You are currently in ${currDir}`);
    })
};
