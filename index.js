import { changeDirectory } from './changeDir.js';
import { setHomeDirectory } from './startFromHomeDir.js';
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
        changeDirectory();
    }
    let currDir = process.cwd();
    console.log(`You are currently in ${currDir}`);
});

rl.on('SIGINT', () => {
    console.log(`Thank you for using File Manager, ${usernameProvidedByUser}!`);
    rl.close();
});