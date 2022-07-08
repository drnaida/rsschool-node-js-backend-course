import { Field, Float, Int, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class Favourites {
    @Field(() => Int, {description: 'ID of the question', nullable: false })
    id: number;

    @Field()
    content: string;

    @Field({nullable: true})
    answerString: string;

    @Field(() => Float, {nullable: true})
    answerNumber: number;
}