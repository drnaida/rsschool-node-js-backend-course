import 'dotenv/config';
import * as http from 'http';
import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from '../controllers/productController';
const server = http.createServer((req, res) => {
    const the_url = req.url;
    if ((req.url === '/api/users'  && req.method === 'GET') || (req.url === '/api/users/'  && req.method === 'GET')) {
        getProducts(req, res);
    } else if (the_url.split('/').length === 4 && req.method == 'GET') {
        const id: string = the_url.split('/')[3];
        getProduct(req, res, id);
    } else if ((req.url === '/api/users' && req.method === 'POST') || (req.url === '/api/users/' && req.method === 'POST')) {
        createProduct(req, res);
    }
    else if (the_url.split('/').length === 4 && req.method == 'PUT') {
        const id: string = the_url.split('/')[3];
        updateProduct(req, res, id);
    } else if (the_url.split('/').length === 4 && req.method == 'DELETE') {
        const id: string = the_url.split('/')[3];
        deleteProduct(req, res, id);
    }
    else {
        console.log(the_url.split('/').length);
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({message: 'Route not found'}));
        res.end();
    }
});

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

export {
    server
}

