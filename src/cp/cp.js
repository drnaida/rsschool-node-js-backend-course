import { fork } from 'child_process';
const argum = process.argv.slice(2);
export const spawnChildProcess = async (args) => {
    const child = fork("./src/cp/files/script.js", args);
};

await spawnChildProcess(argum);