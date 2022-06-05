import {parentPort, workerData} from "worker_threads";

export const nthFibonacci = (n) => n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

export const sendResult = (inputNumber) => {
    const fibonacci = nthFibonacci(inputNumber);
    return fibonacci;
};
parentPort.postMessage(sendResult(workerData.num));