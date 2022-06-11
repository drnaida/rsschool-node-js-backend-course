import os from 'os';
export const osCommands = async (parameter) => {
    if (parameter == '--EOL') {
        return new Promise((resolve, reject) => {
            try {
                resolve(JSON.stringify(os.EOL));
            } catch(err) {
                reject(err);
            }
        })
    } else if (parameter == '--cpus') {
        return new Promise((resolve, reject) => {
            try {
                resolve(os.cpus());
            } catch(err) {
                reject(err);
            }
        })
    } else {
        console.log('Error');
    }
};