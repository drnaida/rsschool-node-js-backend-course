import process from 'process';
export const printInvalid = () => {
    console.log('Invalid input')
    let currDir = process.cwd();
    console.log(`You are currently in ${currDir}`);
};