import {Injectable} from "@nestjs/common";
import axios from 'axios';
import "dotenv/config";

@Injectable()
export class ArtistsService {
    async findAll() {
        const baseURL = process.env.ARTISTS_URL;
        const res = await axios.get(baseURL);
        const res_artists = res.data.items;
        return res_artists;
    }

    async findById(id) {
        const baseURL = `${process.env.ARTISTS_URL}/${id}`;
        const res = await axios.get(baseURL);
        const res_artists = res.data;
        return res_artists;
    }

    async findByIds(ids) {
        const promisesArray = [];
        for (const id of ids) {
            promisesArray.push(this.findById(id));
        }
        const result = await Promise.all(promisesArray);
        return result;
    }
}