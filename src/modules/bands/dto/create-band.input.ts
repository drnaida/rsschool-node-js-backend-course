import {Field, Float, ID, InputType, Int} from "@nestjs/graphql";
import {Genre} from "../../genres/entities/genres.entity";

@InputType()
export class CreateBandInput {
    @Field({nullable: true})
    name: string;

    @Field({nullable: true})
    origin: string;

    // @Field(() => [Member], {nullable: true})
    // members: Member[];

    @Field({nullable: true})
    website: string

    @Field(() => [ID], {nullable: true})
    genresIds: [string];
}