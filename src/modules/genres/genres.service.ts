import {Injectable} from "@nestjs/common";
import axios from 'axios';
import "dotenv/config";
import {CreateGenreInput} from "../genres/dto/create-genre.input";
@Injectable()
export class GenresService {
    async findAll() {
        const baseURL = process.env.GENRES_URL;
        const res = await axios.get(baseURL);
        const res_genres = res.data.items;
        return res_genres;
    }
    async findByIdOnlyOne(id) {
        const baseURL = `${process.env.GENRES_URL}/${id}`;
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

    async createGenre(createGenreInput: CreateGenreInput) {
        const baseURL = `${process.env.GENRES_URL}`;
        const headers = {headers: {Authorization: process.env.AUTHORIZATION_TOKEN}}
        const res = await axios.post(
            baseURL,
            createGenreInput,
            headers
        );
        const res_artists = res.data;
        return res_artists;
    }

    async deleteGenre(id: string) {
        const baseURL = `${process.env.GENRES_URL}/${id}`;
        const headers = {headers: {Authorization: process.env.AUTHORIZATION_TOKEN}}
        const res = await axios.delete(
            baseURL,
            headers
        );
        const res_artists = res.data;
        return res_artists;
    }
}