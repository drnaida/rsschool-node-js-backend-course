import {Field, Float, ID, Int, ObjectType} from '@nestjs/graphql';
import {Album} from "../../albums/entities/albums.entity";
import {Artist} from "../../artists/entities/artists.entity";
import {Band} from "../../bands/entities/bands.entity";
import {Genre} from "../../genres/entities/genres.entity";

@ObjectType()
export class Track {
    @Field(() => ID, {name: 'id', description: 'ID of the question', nullable: false })
    _id: string;

    @Field({nullable: false})
    title: string;

    @Field(() => Album, {nullable: true})
    album: Album;

    @Field(() => [Artist], {nullable: true})
    artists: [Artist];

    @Field(()=> [Band], {nullable: true})
    bands: [Band];

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