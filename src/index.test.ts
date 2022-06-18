import request from 'supertest';
import jest from 'jest';
import { server } from './index';

describe('Scenario 1 from the technical requirement', () => {
    it('Get all records with a GET api/users request (an empty array is expected)', async () => {
        const res = await request(server).get('/api/users');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([]);
    });
});

const objectForPost = {
    "username": "DRNaida",
    "age": 18,
    "hobbies": ["programming", "skating"]
};
let idForTesting;
describe('Scenario 2 from the technical requirement', () => {
    it('A new object is created by a POST api/users request (a response containing newly created record is expected)', async () => {
        const res = await request(server).post('/api/users').set('Accept', 'application/json').send(objectForPost);
        idForTesting = res.body.id;
        expect(res.statusCode).toBe(201);
        expect(res.body.username).toEqual("DRNaida");
        expect(res.body.age).toEqual(18);
        expect(res.body.hobbies).toEqual(["programming", "skating"]);
    });
});
describe('Scenario 3 from the technical requirement', () => {
    it('With a GET api/users/{userId} request, we try to get the created record by its id (the created record is expected)', async () => {
        const res = await request(server).get(`/api/users/${idForTesting}`);
        expect(res.statusCode).toBe(200);
        expect(res.body.username).toEqual("DRNaida");
        expect(res.body.age).toEqual(18);
        expect(res.body.hobbies).toEqual(["programming", "skating"]);
    });
});