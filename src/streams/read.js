import fs from 'fs';
export const read = async () => {
    const content = fs.createReadStream('./src/streams/files/fileToRead.txt', 'utf8');
    content.on("data", (chunk) => {
        process.stdout.write(chunk); 
    });
};

await read();