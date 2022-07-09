import { Module } from '@nestjs/common';
import { ArtistsResolver } from "./artists.resolver";
import {ArtistsService} from "./artists.service";
import {BandsService} from "../bands/bands.service";

@Module({
    providers: [ArtistsResolver, ArtistsService, BandsService],
    exports: [ArtistsService]
})
export class ArtistsModule {}