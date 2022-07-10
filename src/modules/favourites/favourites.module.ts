import { Module } from '@nestjs/common';
import {FavouritesService} from "./favourites.service";
import {BandsService} from "../bands/bands.service";
import {FavouritesResolver} from "./favourites.resolver";

@Module({
    providers: [FavouritesResolver, FavouritesService, BandsService],
    exports: [FavouritesService]
})
export class FavouritesModule {}