import { changeDirectory } from './changeDir.js';
import { setHomeDirectory } from './startFromHomeDir.js';
import { list } from './ls.js';
import { read } from './readFile.js';
import { create } from './createFile.js';
import { rename } from './renameFile.js';
import { remove } from './deleteFile.js';
import { copy } from './copyFile.js';
import {osCommands} from './osCommands.js';
import {calculateHash} from './calcHash.js';
import {compressBrotli} from './compressBrotli.js';
import {decompressBrotli} from './decompressBrotli.js';
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
    } else if (input == 'up') {
        changeDirectory('up');
        let currDir = process.cwd();
        console.log(`You are currently in ${currDir}`);
    } else if (input.startsWith('cd ')) {
        if (input.split(' ').length > 2) {
            console.log('Operation failed');
            let currDir = process.cwd();
            console.log(`You are currently in ${currDir}`);
        } else {
            const whereTo = input.split(' ')[1];
            changeDirectory(whereTo);
            let currDir = process.cwd();
            console.log(`You are currently in ${currDir}`);
        }
    } else if (input == 'ls') {
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
    } else if (input.startsWith('rm ')) {
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
    } else if (input.startsWith('cat ')) {
        if (input.split(' ').length > 2) {
            console.log('Operation failed')
            let currDir = process.cwd();
            console.log(`You are currently in ${currDir}`);
        } else {
            const whatToRead = input.split(' ')[1];
            read(whatToRead);
        }
    } else if (input.startsWith('add ')) {
        const whatToCreate = input.split(' ')[1];
        create(whatToCreate);
    } else if (input.startsWith('cp ')) {
        
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
        
    } else if (input.startsWith('mv ')) {
        (async () => {
            try {
                const whatToCreate = input.split(' ')[1];
                const whereToCopy = input.split(' ')[2];
                const write = await copy(whatToCreate, whereToCopy);
                const answer = await remove(whatToCreate);
                let currDir = process.cwd();
                console.log(`You are currently in ${currDir}`);
            } catch (err) {
                console.error(err);
            }
        })(); 
    } else if (input.startsWith('rn ')) {
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
    } else if (input.startsWith('os ')) {
        (async () => {
            try {
                const parameter = input.split(' ')[1];
                const osCommand = await osCommands(parameter);
                console.log(osCommand);
                let currDir = process.cwd();
                console.log(`You are currently in ${currDir}`);
            } catch (err) {
                console.error(err);
            }
        })(); 
    } else if (input.startsWith('hash ')) {
        (async () => {
            try {
                const pathToFile = input.split(' ')[1];
                const hash = await calculateHash(pathToFile);
                console.log(hash);
                let currDir = process.cwd();
                console.log(`You are currently in ${currDir}`);
            } catch (err) {
                console.error(err);
            }
        })(); 
    } else if (input.startsWith('compress ')) {
        (async () => {
            try {
                const pathToFile = input.split(' ')[1];
                const pathToDestination = input.split(' ')[2];
                const compress = await compressBrotli(pathToFile, pathToDestination);
            } catch (err) {
                console.error(err);
            }
        })(); 
    } else if (input.startsWith('decompress ')) {
        (async () => {
            try {
                const pathToFile = input.split(' ')[1];
                const pathToDestination = input.split(' ')[2];
                const compress = await decompressBrotli(pathToFile, pathToDestination);
            } catch (err) {
                console.error(err);
            }
        })(); 
    } else {
        let currDir = process.cwd();
        console.log('Invalid input');
        console.log(`You are currently in ${currDir}`);
    }
    
});

rl.on('SIGINT', () => {
    console.log(`Thank you for using File Manager, ${usernameProvidedByUser}!`);
    rl.close();
});