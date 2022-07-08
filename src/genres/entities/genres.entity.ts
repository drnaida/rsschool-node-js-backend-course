import { Field, Float, Int, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class Genre {
    @Field(() => Int, {description: 'ID of the question', nullable: false })
    id: number;

    @Field({nullable: true})
    name: string;

    @Field({nullable: true})
    description: string;

    @Field({nullable: true})
    country: string;

    @Field(() => Int, {nullable: true})
    year: number;
}