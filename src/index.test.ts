import request from 'supertest';
import jest from 'jest';
import { server } from './index';

describe('Scenario 1 from the technical requirement', () => {
    it('Get all records with a GET api/users request (an empty array is expected)', async () => {
        const res = await request(server).get('/api/users');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([]);
    });
    const objectForPost = {
        "username": "DRNaida",
        "age": 18,
        "hobbies": ["programming", "skating"]
    };
    let idForTesting;
    it('A new object is created by a POST api/users request (a response containing newly created record is expected)', async () => {
        const res = await request(server).post('/api/users').set('Accept', 'application/json').send(objectForPost);
        idForTesting = res.body.id;
        expect(res.statusCode).toBe(201);
        expect(res.body.username).toEqual("DRNaida");
        expect(res.body.age).toEqual(18);
        expect(res.body.hobbies).toEqual(["programming", "skating"]);
    });
    it('With a GET api/users/{userId} request, we try to get the created record by its id (the created record is expected)', async () => {
        const res = await request(server).get(`/api/users/${idForTesting}`);
        expect(res.statusCode).toBe(200);
        expect(res.body.username).toEqual("DRNaida");
        expect(res.body.age).toEqual(18);
        expect(res.body.hobbies).toEqual(["programming", "skating"]);
    });
    const objectForPut = {
        "username": "NewDRNaida",
        "age": 19,
        "hobbies": ["programming", "skating"]
    };
    it('We try to update the created record with a PUT api/users/{userId}request (a response is expected containing an updated object with the same id)', async () => {
        const res = await request(server).put(`/api/users/${idForTesting}`).set('Accept', 'application/json').send(objectForPut);
        expect(res.statusCode).toBe(200);
        expect(res.body.id).toEqual(idForTesting);
        expect(res.body.username).toEqual("NewDRNaida");
        expect(res.body.age).toEqual(19);
        expect(res.body.hobbies).toEqual(["programming", "skating"]);
    });
    it('With a DELETE api/users/{userId} request, we delete the created object by id (confirmation of successful deletion is expected)', async () => {
        const res = await request(server).delete(`/api/users/${idForTesting}`);
        expect(res.statusCode).toBe(204);
    });
    it('With a GET api/users/{userId} request, we are trying to get a deleted object by id (expected answer is that there is no such object)', async () => {
        const res = await request(server).get(`/api/users/${idForTesting}`);
        expect(res.statusCode).toBe(404);
        expect(res.body).toEqual({message: 'User not found'});
    });
});