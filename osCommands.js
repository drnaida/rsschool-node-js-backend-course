import os from 'os';
export const osCommands = async (parameter) => {
    if (parameter == '--EOL') {
        return new Promise((resolve, reject) => {
            try {
                resolve(JSON.stringify(os.EOL));
            } catch(err) {
                reject('Operation failed');
            }
        })
    } else if (parameter == '--cpus') {
        return new Promise((resolve, reject) => {
            const answer = {
                'Amount of CPUS': '',
                'models and clock rates': []
            }
            try {
                answer['Amount of CPUS'] = os.cpus().length;
                for (let i of os.cpus()) {
                    answer['models and clock rates'].push(i.model);
                }
                resolve(answer);
            } catch(err) {
                reject('Operation failed');
            }
        })
    } else if (parameter == '--homedir') {
        return new Promise((resolve, reject) => {
            try {
                resolve(os.homedir());
            } catch(err) {
                reject('Operation failed');
            }
        })
    } else if (parameter == '--username') {
        return new Promise((resolve, reject) => {
            try {
                resolve(os.userInfo().username);
            } catch(err) {
                reject('Operation failed');
            }
        })
    } else if (parameter == '--architecture') {
        return new Promise((resolve, reject) => {
            try {
                resolve(process.arch);
            } catch(err) {
                reject('Operation failed');
            }
        })
    } else {
        return new Promise((resolve, reject) => {
            try {
                resolve('Invalid input');
            } catch(err) {
                resolve('Invalid input');
            }
        })
    }
};