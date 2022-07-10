import {Injectable} from "@nestjs/common";
import axios from 'axios';
import {CreateAlbumInput} from "../albums/dto/create-album.input";

@Injectable()
export class AlbumsService {
    async findAll() {
        const baseURL = process.env.ALBUMS_URL;
        const res = await axios.get(baseURL);
        const res_artists = res.data.items;
        return res_artists;
    }

    async findById(id) {
        const baseURL = `${process.env.ALBUMS_URL}/${id}`;
        const res = await axios.get(baseURL);
        console.log('lalala', res.data);
        const res_artists = res.data;
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

    async createAlbum(createAlbumInput: CreateAlbumInput) {
        const baseURL = `${process.env.ALBUMS_URL}`;
        const headers = {headers: {Authorization: process.env.AUTHORIZATION_TOKEN}}
        const res = await axios.post(
            baseURL,
            createAlbumInput,
            headers
        );
        const res_artists = res.data;
        return res_artists;
    }

    async deleteAlbum(id: string) {
        const baseURL = `${process.env.ALBUMS_URL}/${id}`;
        const headers = {headers: {Authorization: process.env.AUTHORIZATION_TOKEN}}
        const res = await axios.delete(
            baseURL,
            headers
        );
        const res_artists = res.data;
        return res_artists;
    }
}