import {Worker} from 'worker_threads';
import {cpus} from 'os';
export const performCalculations = async () => {
    const cpusAmount = cpus().length;
    let results = [];
    for (let i = 0; i < cpusAmount; i++) {
        let num = 10 + i;
        const worker = new Worker("./src/wt/worker.js", {workerData: {num: num}});
        let output = {status: '', data: ''};
        worker.once("message", result => {
            output.data = result;
        });

        worker.on("error", error => {
            output.status = 'error';
            output.data = null;
        });

        worker.on("exit", exitCode => {
            if (exitCode == 0) {
                output.status = 'resolved';
            }
            results.push(output);
            console.log(results);
        })
        
    }
    
};

await performCalculations();
