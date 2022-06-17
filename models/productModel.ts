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

export {
    findAll,
    findById
}