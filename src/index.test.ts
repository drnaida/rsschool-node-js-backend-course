import request from 'supertest';
import jest from 'jest';
import { server } from './index';

describe('Scenario 1 from the technical requirement', () => {
  it('Get all records with a GET api/users request (an empty array is expected)', async () => {
    const res = await request(server).get('/api/users')
    expect(res.statusCode).toBe(200)
    expect(res.body).toEqual([])
  })
})