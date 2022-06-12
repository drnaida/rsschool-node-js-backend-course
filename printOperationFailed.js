import process from 'process';
export const printFailed = () => {
    console.log('Operation failed')
    let currDir = process.cwd();
    console.log(`You are currently in ${currDir}`);
};