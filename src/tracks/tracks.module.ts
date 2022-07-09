import { Module } from '@nestjs/common';
import { TracksResolver } from "./tracks.resolver";
import {TracksService} from "./tracks.service";
import {BandsService} from "../bands/bands.service";
import {GenresService} from "../genres/genres.service";
import {ArtistsService} from "../artists/artists.service";

@Module({
    providers: [TracksResolver, TracksService, BandsService, GenresService, ArtistsService],
    exports: [TracksService]
})
export class TracksModule {}