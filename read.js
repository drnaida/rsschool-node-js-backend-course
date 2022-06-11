import fs from 'fs';
export const read = async (whatToRead) => {
    const content = fs.createReadStream(whatToRead, 'utf8');
    content.on("data", (chunk) => {
        console.log(chunk);
    });
};
