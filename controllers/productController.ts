import {findAll, findById} from '../models/productModel';

// Gets all products GET /api/products
async function getProducts(req, res) {
    try {
        const products = await findAll();
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify(products));
        res.end();
    } catch (error) {
        console.log(error);
    }
}

//Get single products
async function getProduct(req, res, id: string) {
    try {
        const product = await findById(id);

        if (!product) {
            res.writeHead(404, {'Content-Type': 'application/json'});
            res.write(JSON.stringify({message: 'Product not found'}));
            res.end();
        } else {
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.write(JSON.stringify({product}));
            res.end();
        }
        
    } catch (error) {
        console.log(error);
    }
}

export {
    getProducts,
    getProduct
}