import {Field, Float, ID, InputType, Int} from "@nestjs/graphql";
import {Genre} from "../../genres/entities/genres.entity";

@InputType()
export class CreateMemberInput {
    @Field(() => ID, {description: 'ID of the question', nullable: false })
    artist: string;

    @Field({nullable: true})
    instrument: string;

    @Field(() => [String], {nullable: true})
    years: string;
}

@InputType()
export class CreateBandInput {
    @Field({nullable: true})
    name: string;

    @Field({nullable: true})
    origin: string;

    @Field(() => [CreateMemberInput], { nullable: true })
    members: {
        artist: string,
        instrument: string;
        years: string[];
    }[];

    @Field({nullable: true})
    website: string

    @Field(() => [ID], {nullable: true})
    genresIds: [string];
}