export const parseArgs = () => {
    let output = '';
    for (let i of process.argv) {
        if (i.startsWith('--')) {
            const flagIndex = process.argv.indexOf(i);
            output = output + i + ' is ' + process.argv[flagIndex + 1] + ', ';
        }
    }
    output = output.slice(0, -2);
    console.log(output)
};

await parseArgs();