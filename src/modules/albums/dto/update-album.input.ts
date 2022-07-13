import {Field, Float, ID, InputType, Int} from "@nestjs/graphql";
import {Genre} from "../../genres/entities/genres.entity";
import {Album} from "../../albums/entities/albums.entity";
import {Artist} from "../../artists/entities/artists.entity";
import {Band} from "../../bands/entities/bands.entity";
import {Track} from "../../tracks/entities/tracks.entity";
import {IsOptional} from "class-validator";

@InputType()
export class UpdateAlbumInput {
    @Field({nullable: true})
    @IsOptional()
    name: string;

    @Field(() => Int, {nullable: true})
    @IsOptional()
    released: number;

    @Field({nullable: true})
    @IsOptional()
    image: string;

    @Field(() => [ID], {nullable: true})
    @IsOptional()
    bandsIds: [string];

    @Field(() => [ID], {nullable: true})
    @IsOptional()
    artistsIds: [string];

    @Field(() => [ID], {nullable: true})
    @IsOptional()
    genresIds: [string];

    @Field(() => [ID], {nullable: true})
    @IsOptional()
    trackIds: [string];
}