import { changeDirectory } from './changeDir.js';
import { setHomeDirectory } from './startFromHomeDir.js';
import { list } from './ls.js';
import { read } from './readFile.js';
import { create } from './createFile.js';
import { rename } from './renameFile.js';
import { remove } from './deleteFile.js';
import { copy } from './copyFile.js';
import { move } from './moveFile.js';
import readline from 'readline';
import process from 'process';
import { copyFile } from 'fs';
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

    if (input.startsWith('rm ')) {
        (async () => {
            try {
                const whatToDelete = input.split(' ')[1];
                const answer = await remove(whatToDelete);
                console.log(answer);
                let currDir = process.cwd();
                console.log(`You are currently in ${currDir}`);
            } catch (err) {
                console.error(err);
            }
        })();   
    }

    if (input.startsWith('cat ')) {
        const whatToRead = input.split(' ')[1];
        const whereToWrite = input.split(' ')[2];
        read(whatToRead, whereToWrite);
    }

    if (input.startsWith('add ')) {
        const whatToCreate = input.split(' ')[1];
        create(whatToCreate);
    }

    if (input.startsWith('cp ')) {
        
        (async () => {
            try {
                const whatToCreate = input.split(' ')[1];
                const whereToCopy = input.split(' ')[2];
                const write = await copy(whatToCreate, whereToCopy);
                let currDir = process.cwd();
                console.log(`You are currently in ${currDir}`);
            } catch (err) {
                console.error(err);
            }
        })();   
        
    }

    if (input.startsWith('mv ')) {
        const whatToCreate = input.split(' ')[1];
        const whereToCopy = input.split(' ')[2];
        move(whatToCreate, whereToCopy);
    }

    if (input.startsWith('rn ')) {
        (async () => {
            try {
                const whatToRename = input.split(' ')[1];
                const howToRename = input.split(' ')[2];
                const renameFile = await rename(whatToRename, howToRename);
                console.log(renameFile);
                let currDir = process.cwd();
                console.log(`You are currently in ${currDir}`);
            } catch (err) {
                console.error(err);
            }
        })();   
    } else {
        let currDir = process.cwd();
        console.log(`You are sdfds currently in ${currDir}`);
    }
    
});

rl.on('SIGINT', () => {
    console.log(`Thank you for using File Manager, ${usernameProvidedByUser}!`);
    rl.close();
});