import { profileEnd } from 'console';
import {findAll, findById, create, update} from '../models/productModel';

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

//Create single product
//POST /api/products
async function createProduct(req, res) {
    try {

        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        })

        req.on('end', async () => {
            console.log(JSON.parse(body));
            const { username, age, hobbies } = JSON.parse(body);
            const product = {
                username,
                age,
                hobbies
            }
            const newProduct = await create(product);
            res.writeHead(201, {'Content-Type': 'application/json'});
            return res.end(JSON.stringify(newProduct));
        });
        
    } catch (error) {
        console.log(error);
    }
}
// PUT /api/products/:id
async function updateProduct(req, res, id) {
    try {
        type User = {
            username: string,
            age: number,
            hobbies: string[]
        }
        const product = await findById(id);
        console.log(typeof(product));
        if (!product) {
            res.writeHead(404, {'Content-Type': 'application/json'});
            res.write(JSON.stringify({message: 'Product not found'}));
            res.end();
        } else {
            let body = '';
            req.on('data', (chunk) => {
                body += chunk.toString();
            })

            req.on('end', async () => {
               
                const { username, age, hobbies } = JSON.parse(body);
                const productData: User = {
                    username: username || product.username,
                    age: age || product.age,
                    hobbies: hobbies || product.hobbies
                }
                const updProduct = await update(id, productData);
                res.writeHead(200, {'Content-Type': 'application/json'});
                return res.end(JSON.stringify(updProduct));
            });
        }
        
    } catch (error) {
        console.log(error);
    }
}

export {
    getProducts,
    getProduct,
    createProduct,
    updateProduct
}