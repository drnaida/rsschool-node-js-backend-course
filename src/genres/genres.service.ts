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
}