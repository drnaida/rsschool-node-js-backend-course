import {Injectable} from "@nestjs/common";
import axios from 'axios';

@Injectable()
export class ArtistsService {
    async findAll() {
        const baseURL = 'http://localhost:3002/v1/artists';
        const res = await axios.get(baseURL);
        const res_artists = res.data.items;
        return res_artists;
    }

    async findById(id) {
        const baseURL = `http://localhost:3002/v1/artists/${id}`;
        const res = await axios.get(baseURL);
        console.log(res.data);
        const res_artists = res.data;
        return res_artists;
    }
}