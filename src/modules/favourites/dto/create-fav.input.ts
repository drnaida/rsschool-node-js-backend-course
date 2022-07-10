import {Field, Float, ID, InputType, Int} from "@nestjs/graphql";
import {Genre} from "../../genres/entities/genres.entity";
import {Band} from "../../bands/entities/bands.entity";
import {Artist} from "../../artists/entities/artists.entity";
import {Track} from "../../tracks/entities/tracks.entity";

@InputType()
export class CreateFavourites {
    @Field(() => Int, {description: 'ID of the question', nullable: false })
    userId: number;

    bandsIds: [string];
    genresIds: [string];
    tracksIds: [string];
    artistsIds: [string];
}