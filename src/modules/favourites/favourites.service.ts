import {Injectable} from "@nestjs/common";
import axios from 'axios';
import "dotenv/config";
import {CreateArtistInput} from "../artists/dto/create-artist.input";
import {CreateFavourites} from "./dto/create-fav.input";

@Injectable()
export class FavouritesService {
    async findAll() {
        const baseURL = process.env.FAVOURITES_URL;
        const res = await axios.get(baseURL, { headers: {Authorization: process.env.AUTHORIZATION_TOKEN} });
        const res_artists = res;
        console.log(res);
        return res_artists;
    }

    async add(createFavoriteInput: CreateFavourites, type) {
        const baseURL = `${process.env.FAVOURITES_URL}/add`;
        const headers = {headers: {Authorization: process.env.AUTHORIZATION_TOKEN}};
        const input = {...createFavoriteInput, type};
        const res = await axios.put(
            baseURL,
            input,
            headers
        );
        const res_artists = res.data;
        return res_artists;
    }

    async delete(removeFavoriteInput: CreateFavourites, type) {
        const baseURL = `${process.env.FAVOURITES_URL}/remove`;
        const headers = {headers: {Authorization: process.env.AUTHORIZATION_TOKEN}};
        const input = {...removeFavoriteInput, type};
        const res = await axios.put(
            baseURL,
            input,
            headers
        );
        const res_artists = res.data;
        return res_artists;
    }
}