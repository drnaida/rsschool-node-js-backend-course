import { Field, Float, Int, ObjectType} from '@nestjs/graphql';
import {Artist} from "../../artists/entities/artists.entity";
import {Band} from "../../bands/entities/bands.entity";
import {Track} from "../../tracks/entities/tracks.entity";
import {Genre} from "../../genres/entities/genres.entity";

@ObjectType()
export class Album {
    @Field(() => Int, {description: 'ID of the question', nullable: false })
    id: number;

    @Field({nullable: true})
    name: string;

    @Field(() => Int, {nullable: true})
    released: number;

    @Field(() => Artist, {nullable: true})
    artists: Artist;

    @Field(() => Band, {nullable: true})
    bands: Band;

    @Field(() => Track, {nullable: true})
    tracks: Track;

    @Field(() => Genre, {nullable: true})
    genres: Genre;

    @Field({nullable: true})
    image: string;
}