import {Args, Query, Resolver, ID} from '@nestjs/graphql';
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

    @Query(() => Band, { name: 'band' })
    async findId(@Args('id', { type: () => ID}) id: string) {
        return this.bandsService.findByIdOnlyOne(id);
    }
}