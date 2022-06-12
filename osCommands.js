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
                    let initialSpeed = i.speed;
                    while (initialSpeed > 10) {
                        initialSpeed /= 10;
                    }
                    initialSpeed = Math.round(100 * initialSpeed) / 100;
                    answer['models and clock rates'].push(
                        {
                            'model': i.model,
                            'speed': initialSpeed
                        }
                    );
                }
                resolve(answer);
            } catch(err) {
                reject(err);
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