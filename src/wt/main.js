import {Worker} from 'worker_threads';
import {cpus} from 'os';
export const performCalculations = async () => {
    const promises = [];
    const cpusAmount = cpus().length;
    let results = [];
    for (let i = 0; i < cpusAmount; i++) {
        promises.push(new Promise( (resolve, reject) => {
            let num = 10 + i;
            const worker = new Worker("./src/wt/worker.js", {workerData: {num: num}});
            let output = {status: '', data: ''};
            worker.on("message", (content) => resolve({
                status: 'resolved',
                data: content
            }));
    
            worker.on("error", (err) => resolve({
                status: 'error',
                data: null
            }));
        }));
    }
    await Promise.all(promises).then((values) => {
        console.log(values);
    });

    
};

await performCalculations();
