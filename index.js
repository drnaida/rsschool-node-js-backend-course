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
import {parseArguments} from './parseArguments.js';
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
    const input = command.trim();
    const args = parseArguments(command.trim());
    if (input == '.exit') {
        console.log(`Thank you for using File Manager, ${usernameProvidedByUser}!`);
        rl.close();
    } else if (input == 'up') {
        changeDirectory('up');
        currIn();
    } else if (input.startsWith('cd ')) {
        if (args.length > 1) {
            printInvalid();
        } else {
            const whereTo = args[0];
            changeDirectory(whereTo);
            currIn();
        }
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
                if (args.length > 1) {
                    printInvalid();
                } else {
                    const whatToDelete = args[0];
                    const answer = await remove(whatToDelete);
                    console.log(answer);
                    currIn();
                }
                
            } catch (err) {
                printFailed();
            }
        })();   
    } else if (input.startsWith('cat ')) {
        if (args.length > 1) {
            printInvalid();
        } else {
            const whatToRead = args[0];
            read(whatToRead);
        }
    } else if (input.startsWith('add ')) {
        if (args.length > 1) {
            printInvalid();
        } else {
            const whatToCreate = args[0];
            create(whatToCreate);
        }
    } else if (input.startsWith('cp ')) {
        
        (async () => {
            try {
                if (args.length > 2) {
                    printInvalid();
                } else {
                    const whatToCreate = args[0];
                    const whereToCopy = args[1];
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
                if (args.length > 2) {
                    printInvalid();
                } else {
                    const whatToCreate = args[0];
                    const whereToCopy = args[1];
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
                if (args.length > 2) {
                    printInvalid();
                } else {
                    const whatToRename = args[0];
                    const howToRename = args[1];
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
                if (args.length > 1) {
                    printInvalid();
                } else {
                    const parameter = args[0];
                    const osCommand = await osCommands(parameter);
                    console.log(osCommand);
                    currIn();
                }
            } catch (err) {
                console.log(err);
                printFailed();
            }
        })(); 
    } else if (input.startsWith('hash ')) {
        (async () => {
            try {
                if (args.length > 1) {
                    printInvalid();
                } else {
                    const pathToFile = args[0];
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
                if (args.length > 2) {
                    printInvalid();
                } else {
                    const pathToFile = args[0];
                    const pathToDestination = args[1];
                    const compress = await compressBrotli(pathToFile, pathToDestination);
                }
            } catch (err) {
                printFailed();
            }
        })(); 
    } else if (input.startsWith('decompress ')) {
        (async () => {
            try {
                if (args.length > 2) {
                    printInvalid();
                } else {
                    const pathToFile = args[0];
                    const pathToDestination = args[1];
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