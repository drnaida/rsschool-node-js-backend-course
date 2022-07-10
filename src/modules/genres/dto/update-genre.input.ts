import {Field, Float, ID, InputType, Int} from "@nestjs/graphql";
import {IsOptional} from "class-validator";

@InputType()
export class UpdateGenreInput {
    @Field({nullable: true})
    @IsOptional()
    name: string;

    @Field({nullable: true})
    @IsOptional()
    description: string;

    @Field({nullable: true})
    @IsOptional()
    country: string;

    @Field(() => Int, {nullable: true})
    @IsOptional()
    year: number;
}