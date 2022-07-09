import {Injectable} from "@nestjs/common";
import axios from 'axios';

@Injectable()
export class TracksService {
    async findAll() {
        const baseURL = 'http://localhost:3006/v1/tracks';
        const res = await axios.get(baseURL);
        const res_artists = res.data.items;
        return res_artists;
    }

    async findById(id) {
        const baseURL = `http://localhost:3006/v1/tracks/${id}`;
        const res = await axios.get(baseURL);
        console.log(res.data);
        const res_artists = res.data;
        return res_artists;
    }

    async findByIds(ids) {
        const promisesArray = [];
        console.log(ids);
        for (const id of ids) {
            promisesArray.push(this.findById(id));
        }
        const result = await Promise.all(promisesArray);
        return result;
    }
}