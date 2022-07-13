import { Module } from '@nestjs/common';
import { BandsResolver } from "./bands.resolver";
import { BandsService } from "./bands.service";
import {GenresService} from "../genres/genres.service";
import {ArtistsService} from "../artists/artists.service";

@Module({
    providers: [BandsResolver, BandsService, GenresService, ArtistsService],
    exports: [BandsService]
})
export class BandsModule {}