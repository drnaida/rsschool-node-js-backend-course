import {Injectable} from "@nestjs/common";
import axios from 'axios';

@Injectable()
export class BandsService {
    async findAll() {
        const baseURL = 'http://localhost:3003/v1/bands';
        const res = await axios.get(baseURL);
        const res_bands = res.data.items;
        return res_bands;
    }
}