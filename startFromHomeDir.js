import os from 'os';

export const setHomeDirectory = async () => {
    try {
        const userHomeDir = os.homedir();
        process.chdir(userHomeDir);
    } catch (err) {
    console.error(err);
}}