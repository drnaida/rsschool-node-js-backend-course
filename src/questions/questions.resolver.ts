import { Query, Resolver } from '@nestjs/graphql';
import { Question } from './entities/questions.entity';

@Resolver(() => Question)
export class QuestionsResolver {
    @Query(() => [Question], {name: 'questions'})
    getAll() {
        return [];
    }
}