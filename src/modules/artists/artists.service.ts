import {Injectable} from "@nestjs/common";
import axios from 'axios';
import "dotenv/config";
import {CreateArtistInput} from "../artists/dto/create-artist.input";
import { UpdateArtistInput} from "./dto/update-artist.input";

@Injectable()
export class ArtistsService {
    async findAll(pagination) {
        const baseURL = process.env.ARTISTS_URL;
        const res = await axios.get(baseURL, { params: { limit: pagination.limit, offset: pagination.offset } });
        console.log(res);
        const res_artists = res.data;
        return res_artists;
    }

    async findById(id) {
        const baseURL = `${process.env.ARTISTS_URL}/${id}`;
        const res = await axios.get(baseURL);
        const res_artists = res.data;
        console.log('lalalla', res_artists);
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

    async createArtist(createArtistInput: CreateArtistInput) {
        const baseURL = `${process.env.ARTISTS_URL}`;
        const headers = {headers: {Authorization: process.env.AUTHORIZATION_TOKEN}}
        const res = await axios.post(
            baseURL,
            createArtistInput,
            headers
        );
        const res_artists = res.data;
        return res_artists;
    }

    async deleteArtist(id: string) {
        const baseURL = `${process.env.ARTISTS_URL}/${id}`;
        const headers = {headers: {Authorization: process.env.AUTHORIZATION_TOKEN}}
        const res = await axios.delete(
            baseURL,
            headers
        );
        const res_artists = res.data;
        return res_artists;
    }

    async updateArtist(id: string, updateArtistInput: UpdateArtistInput) {
        const baseURL = `${process.env.ARTISTS_URL}/${id}`;
        const headers = {headers: {Authorization: process.env.AUTHORIZATION_TOKEN}}
        const res = await axios.put(
            baseURL,
            updateArtistInput,
            headers
        );
        const res_artists = res.data;
        return res_artists;
    }
}