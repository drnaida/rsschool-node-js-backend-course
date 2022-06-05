import { spawn } from 'child_process';
const args = process.argv.slice(2);
export const spawnChildProcess = async (args) => {
    const child = spawn('pwd');
};

await spawnChildProcess();