import {Injectable} from "@nestjs/common";
import {questions} from "./data/questions";

@Injectable()
export class UserService {
    findAll() {
        return questions;
    }
}