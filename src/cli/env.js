export const parseEnv = () => {
    let output = '';
    for (let i in process.env) {
        if (i.startsWith('RSS_')) {
            output = output + i + '=' + process.env[i] + '; ';
        }
    }
    output = output.slice(0, -2);
    console.log(output);
};

await parseEnv();