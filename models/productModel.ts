import * as products from '../products.json';

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(products);
    })
}

export {
    findAll
}