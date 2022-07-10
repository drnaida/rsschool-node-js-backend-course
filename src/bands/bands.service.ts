import {Injectable} from "@nestjs/common";
import axios from 'axios';
import "dotenv/config";

@Injectable()
export class BandsService {
    async findAll() {
        const baseURL = process.env.BANDS_URL;
        const res = await axios.get(baseURL);
        const res_bands = res.data.items;
        return res_bands;
    }
    async findByIdOnlyOne(id) {
        const baseURL = `${process.env.BANDS_URL}/${id}`;
        const res = await axios.get(baseURL);
        const res_artists = res.data;
        return res_artists;
    }
    async findByIds(ids) {
        const promisesArray = [];
        console.log(ids);
        for (const id of ids) {
            promisesArray.push(this.findByIdOnlyOne(id));
        }
        const result = await Promise.all(promisesArray);
        return result;
    }
}