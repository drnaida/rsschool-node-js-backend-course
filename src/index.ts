import 'dotenv/config';
import * as http from 'http';
const server = http.createServer((req, res) => {

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(process.env['EXAMPLE']);
})
// console.log('Hello Typescript!');
// let helloWorld = 'Hello, World';

// helloWorld = 5;