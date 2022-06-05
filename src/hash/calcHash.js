import crypto from 'crypto';
import fs from 'fs';
export const calculateHash = async () => {
    fs.readFile('src/hash/files/fileToCalculateHashFor.txt', 'utf8', (err, data) => {
        if (err) {
            throw new Error('Hash operation failes');
        } else {
            const hashSum = crypto.createHash('sha256');
            hashSum.update(data);
            const hex = hashSum.digest('hex');
            console.log(hex)
        }
    });
};

await calculateHash();