import {v4 as uuid4} from 'uuid';
import { getProducts } from '../controllers/productController';

const users = [
{
    id: '1',
    description: 'sfsdfds'
},
{
    id: '2',
    description: 'asaasasa'
}
];

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(users);
    })
}

function findById(id: string) {
    return new Promise((resolve, reject) => {
        console.log(users);
        const product = users.find((p) => p.id === id);
        console.log(product);
        resolve(product);
    })
}

function create(product) {
    return new Promise((resolve, reject) => {
        const newProduct = {id: uuid4(), ...product};
        users.push(newProduct);
        resolve(newProduct);
    })
}

export {
    findAll,
    findById,
    create
}