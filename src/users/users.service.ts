import {Injectable} from "@nestjs/common";
import axios from 'axios';
import "dotenv/config";
import {User} from "./entities/users.entity";
import {CreateUserInput} from "./dto/create-user.input";
import {LoginUserInputForJwt} from "./dto/login-user.input";

@Injectable()
export class UsersService {
    async findAll() {
        const baseURL = process.env.USERS_URL;
        const res = await axios.get(baseURL);
        const res_artists = res.data.items;
        return res_artists;
    }

    async findById(id) {
        const baseURL = `${process.env.USERS_URL}/${id}`;
        const res = await axios.get(baseURL);
        console.log(res.data);
        const res_artists = res.data;
        return res_artists;
    }

    async findByIds(ids) {
        const promisesArray = [];
        console.log(ids);
        for (const id of ids) {
            promisesArray.push(this.findById(id));
        }
        const result = await Promise.all(promisesArray);
        return result;
    }

    async createUser(createUserInput: CreateUserInput) {
        const baseURL = `${process.env.USERS_URL}/register`;
        const res = await axios.post(baseURL, createUserInput);
        const res_artists = res.data;
        console.log(res_artists);
        return res_artists;
    }

    async loginUser(loginInputForJwt: LoginUserInputForJwt) {
        const baseURL = `${process.env.USERS_URL}/login`;
        const res = await axios.post(baseURL, loginInputForJwt);
        const res_artists = res.data;
        console.log(res_artists);
        return res_artists;
    }
}