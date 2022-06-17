import 'dotenv/config';
import * as http from 'http';
const server = http.createServer((req, res) => {

});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(process.env['EXAMPLE']);
    console.log('Hello Typescript!');
    let helloWorld: string = 'Hello, World';

    let firstName: string = 'John';
    let age: number = 30;

    // Tuple
    type srtingAndNumber = [string, number];
    let x: srtingAndNumber = ['Hello', 10];

    // Enums
    enum Continents {
        North_America,
        South_America,
        Africa,
        Asia,
        Europe,
        Antarctica,
        Australia
    }

    let region = Continents.Africa;
})

