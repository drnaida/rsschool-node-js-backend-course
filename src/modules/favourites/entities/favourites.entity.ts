import {Field, Float, ID, Int, ObjectType} from '@nestjs/graphql';
import {Band} from "../../bands/entities/bands.entity";
import {Genre} from "../../genres/entities/genres.entity";
import {Artist} from "../../artists/entities/artists.entity";
import {Track} from "../../tracks/entities/tracks.entity";

@ObjectType()
export class Favourites {
    @Field(() => ID, {name: 'id', description: 'ID of the question', nullable: false })
    _id: string;

    @Field(() => Int, {description: 'ID of the question', nullable: false })
    userId: number;

    @Field(() => Band, {nullable: true})
    bands: Band;

    @Field(() => Genre, {nullable: true})
    genres: Genre;

    @Field(() => Artist, {nullable: true})
    artists: Artist;

    @Field(() => Track, {nullable: true})
    tracks: Track;

    bandsIds: [string];
    genresIds: [string];
    tracksIds: [string];
    artistsIds: [string];
}