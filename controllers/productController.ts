import { profileEnd } from 'console';
import {checkDataForCreateFunction, checkThatThisIsUUID4} from '../utils';
import { database } from '../src/index';
import {v4 as uuid4} from 'uuid';
// Gets all products GET /api/products
async function getProducts(req, res) {
    try {
        const products = await database.getAll();
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

        if (checkThatThisIsUUID4(id)) {
            const product = await database.getById(id);
            console.log('dsfsd' + product);
            if (!product) {
                console.log('404');
                res.writeHead(404, {'Content-Type': 'application/json'});
                res.write(JSON.stringify({message: 'User not found'}));
                res.end();
            } else {
                res.writeHead(200, {'Content-Type': 'application/json'});
                res.write(JSON.stringify(product));
                res.end();
            }
        } else {
            console.log('400');
            res.writeHead(400, {'Content-Type': 'application/json'});
            res.write(JSON.stringify({message: 'Not an uuid'}));
            res.end();
        }
        
    } catch (error) {
        console.log(error);
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({message: 'User not found'}));
        res.end();
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
            const { username, age, hobbies } = JSON.parse(body);
            const neededTypes = checkDataForCreateFunction(username, age, hobbies);
            if (neededTypes) {
                type User = {
                    username: string,
                    age: number,
                    hobbies: string[]
                }
                const product: User = {
                    username,
                    age,
                    hobbies
                }
                const someProduct = {id: uuid4(), ...product};
                const newProduct = await database.add(someProduct);
                res.writeHead(201, {'Content-Type': 'application/json'});
                return res.end(JSON.stringify(someProduct));
            } else {
                res.writeHead(400, {'Content-Type': 'application/json'});
                return res.end(JSON.stringify({message: 'incorrect data for new user'}));
            }
            
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
        if (checkThatThisIsUUID4(id)) {
            const product = await database.getById(id);
            console.log(typeof(product));
            if (!product) {
                res.writeHead(404, {'Content-Type': 'application/json'});
                res.write(JSON.stringify({message: 'User not found'}));
                res.end();
            } else {
                let body = '';
                req.on('data', (chunk) => {
                    body += chunk.toString();
                })

                req.on('end', async () => {
                
                    const { username, age, hobbies } = JSON.parse(body);
                    const neededTypes = checkDataForCreateFunction(username, age, hobbies);
                    if (neededTypes) {
                        const productData: User = {
                            username: username,
                            age: age,
                            hobbies: hobbies
                        }
                        const updProduct = await database.update(id, productData);
                        res.writeHead(200, {'Content-Type': 'application/json'});
                        return res.end(JSON.stringify(updProduct));
                    } else {
                        res.writeHead(400, {'Content-Type': 'application/json'});
                        return res.end(JSON.stringify({message: 'incorrect data to update user'}));
                    }
                });
            }
        } else {
            console.log('400');
            res.writeHead(400, {'Content-Type': 'application/json'});
            res.write(JSON.stringify({message: 'Not an uuid '}));
            res.end();
        }
        
        
    } catch (error) {
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({message: 'User not found'}));
        res.end();
    }
}

//Delete single products
//DELETE /api/products/:id
async function deleteProduct(req, res, id: string) {
    try {
        if (checkThatThisIsUUID4(id)) {
            const product = await database.getById(id);

            if (!product) {
                res.writeHead(404, {'Content-Type': 'application/json'});
                res.write(JSON.stringify({message: 'User not found'}));
                res.end();
            } else {
                await database.delete(id);
                res.writeHead(204, {'Content-Type': 'application/json'});
                res.end();
            }
        } else {
            console.log('400');
            res.writeHead(400, {'Content-Type': 'application/json'});
            res.write(JSON.stringify({message: 'Not an uuid'}));
            res.end();
        }
        
        
    } catch (error) {
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.write(JSON.stringify({message: 'User not found'}));
        res.end();
    }
}

export {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}