import {Field, Float, ID, InputType, Int} from "@nestjs/graphql";
import {Genre} from "../../genres/entities/genres.entity";
import {Album} from "../../albums/entities/albums.entity";
import {Artist} from "../../artists/entities/artists.entity";
import {Band} from "../../bands/entities/bands.entity";
import {Track} from "../../tracks/entities/tracks.entity";

@InputType()
export class CreateAlbumInput {
    @Field({nullable: true})
    name: string;

    @Field(() => Int, {nullable: true})
    released: number;

    @Field({nullable: true})
    image: string;

    @Field(() => [ID], {nullable: true})
    bandsIds: [string];

    @Field(() => [ID], {nullable: true})
    artistsIds: [string];

    @Field(() => [ID], {nullable: true})
    genresIds: [string];

    @Field(() => [ID], {nullable: true})
    trackIds: [string];
}