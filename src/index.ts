import 'dotenv/config';
import * as http from 'http';
import { getProducts } from '../controllers/productController';
const server = http.createServer((req, res) => {
    if (req.url === '/api/products'  && req.method === 'GET') {
        getProducts(req, res);
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({message: 'Route not found'}));
        res.end();
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    
})

