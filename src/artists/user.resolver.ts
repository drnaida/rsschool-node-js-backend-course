import { Query, Resolver } from '@nestjs/graphql';
import { Question } from './entities/artists.entity';
import {questions} from "./data/questions";
import {UserService} from "./user.service";

@Resolver(() => Question)
export class UserResolver {
    constructor(private readonly questionsService: UserService) {}


    @Query(() => [Question], {name: 'questions'})
    getAll() {
        return this.questionsService.findAll();
    }
}