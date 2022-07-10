import { Module } from '@nestjs/common';
import { AlbumsResolver } from "./albums.resolver";
import {AlbumsService} from "./albums.service";
import {BandsService} from "../bands/bands.service";
import {GenresService} from "../genres/genres.service";
import {ArtistsService} from "../artists/artists.service";
import {TracksService} from "../tracks/tracks.service";

@Module({
    providers: [AlbumsResolver, AlbumsService, BandsService, GenresService, ArtistsService, TracksService],
    exports: [AlbumsService]
})
export class AlbumsModule {}