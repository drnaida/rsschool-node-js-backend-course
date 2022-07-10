import { Module } from '@nestjs/common';
import { BandsResolver } from "./bands.resolver";
import { BandsService } from "./bands.service";
import {GenresService} from "../genres/genres.service";

@Module({
    providers: [BandsResolver, BandsService, GenresService],
    exports: [BandsService]
})
export class BandsModule {}