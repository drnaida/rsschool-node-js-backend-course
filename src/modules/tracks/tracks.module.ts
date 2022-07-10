import { Module, forwardRef } from '@nestjs/common';
import { TracksResolver } from "./tracks.resolver";
import {TracksService} from "./tracks.service";
import {BandsService} from "../bands/bands.service";
import {GenresService} from "../genres/genres.service";
import {ArtistsService} from "../artists/artists.service";
import {AlbumsService} from "../albums/albums.service";
import {AlbumsModule} from "../albums/albums.module";

@Module({
    providers: [TracksResolver, TracksService, BandsService, GenresService, ArtistsService, AlbumsService],
    exports: [TracksService]
})
export class TracksModule {}