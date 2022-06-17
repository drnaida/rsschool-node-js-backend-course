import 'dotenv/config';
import * as http from 'http';
import * as products from '../products.json';
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(products));
    res.end();
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    
})

