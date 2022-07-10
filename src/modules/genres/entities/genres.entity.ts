import {Field, Float, ID, Int, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class Genre {
    @Field(() => ID, {name: 'id', description: 'ID of the question', nullable: false })
    _id: string;

    @Field({nullable: true})
    name: string;

    @Field({nullable: true})
    description: string;

    @Field({nullable: true})
    country: string;

    @Field(() => Int, {nullable: true})
    year: number;
}