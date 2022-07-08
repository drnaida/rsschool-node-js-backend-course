import { Query, Resolver } from '@nestjs/graphql';
import { Question } from './entities/questions.entity';
import {questions} from "./data/questions";
import {QuestionsService} from "./questions.service";

@Resolver(() => Question)
export class QuestionsResolver {
    constructor(private readonly questionsService: QuestionsService) {}
    

    @Query(() => [Question], {name: 'questions'})
    getAll() {
        return this.questionsService.findAll();
    }
}