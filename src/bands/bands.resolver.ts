import {Args, Query, Resolver} from '@nestjs/graphql';
import { Band } from './entities/bands.entity';
import {BandsService} from "./bands.service";
import {Artist} from "../artists/entities/artists.entity";

@Resolver(() => Band)
export class BandsResolver {
    constructor(private bandsService: BandsService) {}


    @Query(() => [Band], {name: 'bands'})
    getAll() {
        return this.bandsService.findAll();
    }

    @Query(returns => Band, { name: 'band' })
    async getAuthor(@Args('id', { type: () => String }) id: string) {
        return this.bandsService.findById(id);
    }
}