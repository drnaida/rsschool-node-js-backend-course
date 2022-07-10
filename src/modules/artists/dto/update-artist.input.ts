import {Field, Float, ID, InputType} from "@nestjs/graphql";
import { IsOptional } from 'class-validator';

@InputType()
export class UpdateArtistInput {
    @Field({nullable: true})
    @IsOptional()
    firstName: string;

    @Field({nullable: true})
    @IsOptional()
    secondName: string;

    @Field({nullable: true})
    @IsOptional()
    middleName: string;

    @Field({nullable: true})
    @IsOptional()
    birthDate: string;

    @Field({nullable: true})
    @IsOptional()
    birthPlace: string;

    @Field({nullable: true})
    @IsOptional()
    country: string;

    @Field(() => [ID], {nullable: true})
    @IsOptional()
    bandsIds: string;

    @Field(() => [String], {nullable: true})
    @IsOptional()
    instruments: string[];
}