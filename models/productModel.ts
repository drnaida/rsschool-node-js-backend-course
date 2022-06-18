import {v4 as uuid4} from 'uuid';
import { getProducts } from '../controllers/productController';

export interface User {
    id: string | typeof uuid4;
    username: string,
    age: number,
    hobbies: string[]
}

let users = [
    
];

function findAll() {
    return new Promise((resolve, reject) => {
        resolve(users);
    })
}

function findById(id: string) {
    return new Promise<User>((resolve, reject) => {
        try {
            const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

            regexExp.test(id);
            if (id) {
                const product = users.find((p) => p.id === id) || '';
                if (product) {
                    resolve(product);
                }
            } else {
                resolve('invalid');
            }
            
        } catch (error) {
            reject(error);
        }
        
    })
}

function create(product) {
    return new Promise((resolve, reject) => {
        const newProduct = {id: uuid4(), ...product};
        users.push(newProduct);
        resolve(newProduct);
    })
}

function update(id, product) {
    return new Promise((resolve, reject) => {
        const index = users.findIndex((p) => p.id === id);
        users[index] = {id, ...product};
        resolve(users[index]);
    })
}

function remove(id) {
    return new Promise((resolve, reject) => {
        users = users.filter((p) => p.id != id); 
        resolve('');
    })
}


export {
    findAll,
    findById,
    create,
    update,
    remove
}