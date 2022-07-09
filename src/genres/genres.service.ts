import {Injectable} from "@nestjs/common";
import axios from 'axios';

@Injectable()
export class GenresService {
    async findAll() {
        const baseURL = 'http://localhost:3001/v1/genres';
        const res = await axios.get(baseURL);
        const res_genres = res.data.items;
        return res_genres;
    }
    async findByIdOnlyOne(id) {
        const baseURL = `http://localhost:3001/v1/genres/${id}`;
        const res = await axios.get(baseURL);
        const res_artists = res.data;
        return res_artists;
    }
    async findByIds(ids) {
        const promisesArray = [];
        for (const id of ids) {
            promisesArray.push(this.findByIdOnlyOne(id));
        }
        const result = await Promise.all(promisesArray);
        console.log('result', result);
        return result;
    }
}