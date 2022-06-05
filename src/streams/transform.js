import {Transform, pipeline} from 'stream';
export const transform = async () => {
    const transformed = new Transform({
        transform(chunk, encryption, callback) {
            const chunkStringified = chunk.toString();
            const reversed = chunkStringified.split('').reverse().join('');
            this.push(reversed + '\n');
            callback();
        }
    });

    pipeline(
        process.stdin,
        transformed,
        process.stdout,
        err => {
            console.log('error ${err}')
        }
    )
};

await transform();