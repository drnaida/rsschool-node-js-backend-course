import fs from 'fs';
export const write = async () => {
    process.stdin.on('data', data => {
        const whereToWrite = fs.createWriteStream('./src/streams/files/fileToWrite.txt');
        whereToWrite.write(data, ()=> {
            process.exit();
        });
    });
};

await write();