import {Injectable} from "@nestjs/common";
import axios from 'axios';
import "dotenv/config";
@Injectable()
export class GenresService {
    async findAll() {
        const baseURL = process.env.GENRES_URL;
        const res = await axios.get(baseURL);
        const res_genres = res.data.items;
        return res_genres;
    }
    async findByIdOnlyOne(id) {
        const baseURL = `${process.env.GENRES_URL}/${id}`;
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