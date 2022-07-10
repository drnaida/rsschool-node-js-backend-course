import {Injectable} from "@nestjs/common";
import axios from 'axios';
import "dotenv/config";
@Injectable()
export class TracksService {
    async findAll() {
        const baseURL = process.env.TRACKS_URL;
        const res = await axios.get(baseURL);
        const res_artists = res.data.items;
        console.log('data23232', res_artists);
        return res_artists;
    }

    async findById(id) {
        const baseURL = `${process.env.TRACKS_URL}/${id}`;
        const res = await axios.get(baseURL);
        console.log('data254523', res.data);
        const res_artists = res.data;
        return res_artists;
    }

    async findByIds(ids) {
        const promisesArray = [];
        console.log('data3232', ids);
        for (const id of ids) {
            promisesArray.push(this.findById(id));
        }
        const result = await Promise.all(promisesArray);
        return result;
    }
}