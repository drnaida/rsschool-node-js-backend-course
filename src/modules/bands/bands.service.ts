import {Injectable} from "@nestjs/common";
import axios from 'axios';
import "dotenv/config";
import {CreateBandInput} from "../bands/dto/create-band.input";

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
        for (const id of ids) {
            promisesArray.push(this.findByIdOnlyOne(id));
        }
        const result = await Promise.all(promisesArray);
        return result;
    }
    async createBand(createBandInput: CreateBandInput) {
        const baseURL = `${process.env.BANDS_URL}`;
        const headers = {headers: {Authorization: process.env.AUTHORIZATION_TOKEN}}
        const res = await axios.post(
            baseURL,
            createBandInput,
            headers
        );
        const res_artists = res.data;
        return res_artists;
    }

    async deleteBand(id: string) {
        const baseURL = `${process.env.BANDS_URL}/${id}`;
        const headers = {headers: {Authorization: process.env.AUTHORIZATION_TOKEN}}
        const res = await axios.delete(
            baseURL,
            headers
        );
        const res_artists = res.data;
        return res_artists;
    }
}