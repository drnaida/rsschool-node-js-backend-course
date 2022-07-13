import { Module } from '@nestjs/common';
import {FavouritesService} from "./favourites.service";
import {BandsService} from "../bands/bands.service";
import {FavouritesResolver} from "./favourites.resolver";
import {GenresService} from "../genres/genres.service";
import {TracksService} from "../tracks/tracks.service";
import {ArtistsService} from "../artists/artists.service";

@Module({
    providers: [FavouritesResolver, FavouritesService, BandsService, GenresService, TracksService, ArtistsService],
    exports: [FavouritesService]
})
export class FavouritesModule {}