import readline from 'readline';
const usernameProvidedByUser = process.argv[2].split('=')[1];

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log(`Welcome! to the File Manager, ${usernameProvidedByUser}!`)
rl.question('What do you think of Node.js? ', (answer) => {
// TODO: Log the answer in a database
    console.log(`Thank you for your valuable feedback: ${answer}`);

    rl.close();
});