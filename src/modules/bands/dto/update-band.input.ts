import {Field, Float, ID, InputType, Int} from "@nestjs/graphql";
import {Genre} from "../../genres/entities/genres.entity";
import {IsOptional} from "class-validator";

@InputType()
export class UpdateBandInput {
    @Field({nullable: true})
    @IsOptional()
    name: string;

    @Field({nullable: true})
    @IsOptional()
    origin: string;

    // @Field(() => [Member], {nullable: true})
    // members: Member[];

    @Field({nullable: true})
    @IsOptional()
    website: string

    @Field(() => [ID], {nullable: true})
    @IsOptional()
    genresIds: [string];
}