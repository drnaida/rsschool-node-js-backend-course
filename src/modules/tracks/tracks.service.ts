import {Injectable} from "@nestjs/common";
import axios from 'axios';
import "dotenv/config";
import {CreateTrackInput} from "../tracks/dto/create-track.input";
import {UpdateTrackInput} from "../tracks/dto/update-track.input";
@Injectable()
export class TracksService {
    async findAll(pagination) {
        const baseURL = process.env.TRACKS_URL;
        const res = await axios.get(baseURL, { params: { limit: pagination.limit, offset: pagination.offset } });
        const res_artists = res.data.items;
        console.log('data23232', res_artists);
        return res_artists;
    }

    async findById(id) {
        const baseURL = `${process.env.TRACKS_URL}/${id}`;
        const res = await axios.get(baseURL);
        console.log('data254523', res.data);
        const res_artists = res.data;
        return res_artists;
    }

    async findByIds(ids) {
        const promisesArray = [];
        console.log('data3232', ids);
        for (const id of ids) {
            promisesArray.push(this.findById(id));
        }
        const result = await Promise.all(promisesArray);
        return result;
    }

    async createTrack(createTrackInput: CreateTrackInput) {
        const baseURL = `${process.env.TRACKS_URL}`;
        const headers = {headers: {Authorization: process.env.AUTHORIZATION_TOKEN}}
        const res = await axios.post(
            baseURL,
            createTrackInput,
            headers
        );
        const res_artists = res.data;
        return res_artists;
    }
    async deleteTrack(id: string) {
        const baseURL = `${process.env.TRACKS_URL}/${id}`;
        const headers = {headers: {Authorization: process.env.AUTHORIZATION_TOKEN}}
        const res = await axios.delete(
            baseURL,
            headers
        );
        const res_artists = res.data;
        return res_artists;
    }

    async updateTrack(id: string, updateTrackInput: UpdateTrackInput) {
        const baseURL = `${process.env.TRACKS_URL}/${id}`;
        const headers = {headers: {Authorization: process.env.AUTHORIZATION_TOKEN}}
        const res = await axios.put(
            baseURL,
            updateTrackInput,
            headers
        );
        const res_artists = res.data;
        return res_artists;
    }

}