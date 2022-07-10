import {Field, Float, ID, InputType, Int} from "@nestjs/graphql";
import {Genre} from "../../genres/entities/genres.entity";
import {Album} from "../../albums/entities/albums.entity";
import {Artist} from "../../artists/entities/artists.entity";
import {Band} from "../../bands/entities/bands.entity";

@InputType()
export class CreateTrackInput {
    @Field({nullable: false})
    title: string;

    @Field(()=> Int, {nullable: true})
    duration: number;

    @Field(()=> Int, {nullable: true})
    released: number;

    @Field(()=> [Genre], {nullable: true})
    genres: [Genre];

    bandsIds: [string];

    artistsIds: [string];

    albumId: string;

    genresIds: [string];
}