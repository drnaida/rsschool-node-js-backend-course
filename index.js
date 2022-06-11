import { changeDirectory } from './changeDir.js';
import { setHomeDirectory } from './startFromHomeDir.js';
import { list } from './ls.js';
import { read } from './readFile.js';
import { create } from './createFile.js';
import readline from 'readline';
import process from 'process';
const usernameProvidedByUser = process.argv[2].split('=')[1];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log(`Welcome! to the File Manager, ${usernameProvidedByUser}!`)
setHomeDirectory();
let currDir = process.cwd();
console.log(`You are currently in ${currDir}`);
rl.on('line', (input) => {
    if (input == '.exit') {
        console.log(`Thank you for using File Manager, ${usernameProvidedByUser}!`);
        rl.close();
    }
    if (input == 'up') {
        changeDirectory('up');
        let currDir = process.cwd();
        console.log(`You are currently in ${currDir}`);
    }

    if (input.startsWith('cd ')) {
        const whereTo = input.split(' ')[1];
        changeDirectory(whereTo);
        let currDir = process.cwd();
        console.log(`You are currently in ${currDir}`);
    }

    if (input == 'ls') {
        (async () => {
            try {
                const files = await list();
                console.log(files);
                let currDir = process.cwd();
                console.log(`You are currently in ${currDir}`);
            } catch (err) {
                console.error(err);
            }
        })();   
    }

    if (input.startsWith('cat ')) {
        const whatToRead = input.split(' ')[1];
        read(whatToRead);
    }

    if (input.startsWith('add ')) {
        const whatToCreate = input.split(' ')[1];
        create(whatToCreate);
    }
});

rl.on('SIGINT', () => {
    console.log(`Thank you for using File Manager, ${usernameProvidedByUser}!`);
    rl.close();
});