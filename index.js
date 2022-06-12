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
import {printInvalid} from './printInvalidInput.js';
import {printFailed} from './printOperationFailed.js';
import {currIn} from './youAreCurrentlyIn.js';
import readline from 'readline';
import process from 'process';
const usernameProvidedByUser = process.argv[2].split('=')[1];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log(`Welcome! to the File Manager, ${usernameProvidedByUser}!`)
setHomeDirectory();
currIn();
rl.on('line', (command) => {
    const input = command.trim()
    if (input == '.exit') {
        console.log(`Thank you for using File Manager, ${usernameProvidedByUser}!`);
        rl.close();
    } else if (input == 'up') {
        changeDirectory('up');
        currIn();
    } else if (input.startsWith('cd ')) {
        const the_path = input.slice(3).replace(/"/g, '');;
        changeDirectory(the_path);
        currIn();
    } else if (input == 'ls') {
        (async () => {
            try {
                const files = await list();
                console.log(files);
                currIn();
            } catch (err) {
                printFailed();
            }
        })();   
    } else if (input.startsWith('rm ')) {
        (async () => {
            try {
                if (input.split(' ').length > 2) {
                    printInvalid();
                } else {
                    const whatToDelete = input.split(' ')[1];
                    const answer = await remove(whatToDelete);
                    console.log(answer);
                    currIn();
                }
                
            } catch (err) {
                printFailed();
            }
        })();   
    } else if (input.startsWith('cat ')) {
        if (input.split(' ').length > 2) {
            printInvalid();
        } else {
            const whatToRead = input.split(' ')[1];
            read(whatToRead);
        }
    } else if (input.startsWith('add ')) {
        if (input.split(' ').length > 2) {
            printInvalid();
        } else {
            const whatToCreate = input.split(' ')[1];
            create(whatToCreate);
        }
    } else if (input.startsWith('cp ')) {
        
        (async () => {
            try {
                if (input.split(' ').length > 3) {
                    printInvalid();
                } else {
                    const whatToCreate = input.split(' ')[1];
                    const whereToCopy = input.split(' ')[2];
                    const write = await copy(whatToCreate, whereToCopy);
                    currIn();
                }
            } catch (err) {
                printFailed();
            }
        })();   
        
    } else if (input.startsWith('mv ')) {
        (async () => {
            try {
                if (input.split(' ').length > 3) {
                    printInvalid();
                } else {
                    const whatToCreate = input.split(' ')[1];
                    const whereToCopy = input.split(' ')[2];
                    const write = await copy(whatToCreate, whereToCopy);
                    const answer = await remove(whatToCreate);
                    currIn();
                }
            } catch (err) {
                printFailed();
            }
        })(); 
    } else if (input.startsWith('rn ')) {
        (async () => {
            try {
                if (input.split(' ').length > 3) {
                    printInvalid();
                } else {
                    const whatToRename = input.split(' ')[1];
                    const howToRename = input.split(' ')[2];
                    const renameFile = await rename(whatToRename, howToRename);
                    console.log(renameFile);
                    currIn();
                }
            } catch (err) {
                printFailed();
            }
        })();   
    } else if (input.startsWith('os ')) {
        (async () => {
            try {
                if (input.split(' ').length > 2) {
                    printInvalid();
                } else {
                    const parameter = input.split(' ')[1];
                    const osCommand = await osCommands(parameter);
                    console.log(osCommand);
                    currIn();
                }
            } catch (err) {
                printFailed();
            }
        })(); 
    } else if (input.startsWith('hash ')) {
        (async () => {
            try {
                if (input.split(' ').length > 2) {
                    printInvalid();
                } else {
                    const pathToFile = input.split(' ')[1];
                    const hash = await calculateHash(pathToFile);
                    console.log(hash);
                    currIn();
                }
            } catch (err) {
                printFailed();
            }
        })(); 
    } else if (input.startsWith('compress ')) {
        (async () => {
            try {
                if (input.split(' ').length > 3) {
                    printInvalid();
                } else {
                    const pathToFile = input.split(' ')[1];
                    const pathToDestination = input.split(' ')[2];
                    const compress = await compressBrotli(pathToFile, pathToDestination);
                }
            } catch (err) {
                printFailed();
            }
        })(); 
    } else if (input.startsWith('decompress ')) {
        (async () => {
            try {
                if (input.split(' ').length > 3) {
                    printInvalid();
                } else {
                    const pathToFile = input.split(' ')[1];
                    const pathToDestination = input.split(' ')[2];
                    const compress = await decompressBrotli(pathToFile, pathToDestination);
                }
            } catch (err) {
                printFailed();
            }
        })(); 
    } else {
        printInvalid();
    }
    
});

rl.on('SIGINT', () => {
    console.log(`Thank you for using File Manager, ${usernameProvidedByUser}!`);
    rl.close();
});