import process from 'process';
export const currIn= () => {
    let currDir = process.cwd();
    console.log(`You are currently in ${currDir}`);
};