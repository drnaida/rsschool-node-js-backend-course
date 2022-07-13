import {Field, Float, ID, InputType, Int} from "@nestjs/graphql";
import {Genre} from "../../genres/entities/genres.entity";
import {Album} from "../../albums/entities/albums.entity";
import {Artist} from "../../artists/entities/artists.entity";
import {Band} from "../../bands/entities/bands.entity";
import {IsOptional} from "class-validator";

@InputType()
export class UpdateTrackInput {
    @Field({nullable: false})
    @IsOptional()
    title: string;

    @Field(()=> Int, {nullable: true})
    @IsOptional()
    duration: number;

    @Field(()=> Int, {nullable: true})
    @IsOptional()
    released: number;

    @Field(() => [ID], {nullable: true})
    @IsOptional()
    bandsIds: [string];

    @Field(() => [ID], {nullable: true})
    @IsOptional()
    artistsIds: [string];

    @Field(() => [ID], {nullable: true})
    @IsOptional()
    albumId: string;

    @Field(() => [ID], {nullable: true})
    @IsOptional()
    genresIds: [string];
}