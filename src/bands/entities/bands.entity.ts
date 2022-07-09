import {Field, Float, ID, Int, ObjectType} from '@nestjs/graphql';
import {Genre} from "../../genres/entities/genres.entity";

@ObjectType()
export class Member {
    @Field(() => Int, {description: 'ID of the question', nullable: false })
    id: number;

    @Field({nullable: true})
    firstName: string;

    @Field({nullable: true})
    secondName: string;

    @Field({nullable: true})
    middleName: string;

    @Field({nullable: true})
    instrument: string;

    @Field(()=>[String], {nullable: true})
    years: string[];
}

@ObjectType()
export class Band {
    @Field(() => ID, {name: 'id', description: 'ID of the question', nullable: false })
    _id: string;

    @Field({nullable: true})
    name: string;

    @Field({nullable: true})
    origin: string;

    // @Field(() => [Member], {nullable: true})
    // members: Member[];

    @Field({nullable: true})
    website: string

    // @Field(() => [Genre], {nullable: true})
    // genres: Genre[];
}
