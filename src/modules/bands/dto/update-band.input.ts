import {Field, Float, ID, InputType, Int} from "@nestjs/graphql";
import {Genre} from "../../genres/entities/genres.entity";
import {IsOptional} from "class-validator";

@InputType()
export class UpdateMemberInput {
    @Field(() => ID, {description: 'ID of the question', nullable: false })
    @IsOptional()
    artist: string;

    @Field({nullable: true})
    @IsOptional()
    instrument: string;

    @Field(() => [String], {nullable: true})
    @IsOptional()
    years: string;
}

@InputType()
export class UpdateBandInput {
    @Field({nullable: true})
    @IsOptional()
    name: string;

    @Field({nullable: true})
    @IsOptional()
    origin: string;

    @Field(() => [UpdateMemberInput], { nullable: true })
    @IsOptional()
    members: {
        artist: string,
        instrument: string;
        years: string[];
    }[];

    @Field({nullable: true})
    @IsOptional()
    website: string

    @Field(() => [ID], {nullable: true})
    @IsOptional()
    genresIds: [string];
}