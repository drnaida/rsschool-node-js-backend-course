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
}