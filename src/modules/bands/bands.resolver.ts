import {Args, Query, Resolver, ID, ResolveField, Parent, Mutation} from '@nestjs/graphql';
import { Band } from './entities/bands.entity';
import {BandsService} from "./bands.service";
import {Artist} from "../artists/entities/artists.entity";
import {Genre} from "../genres/entities/genres.entity";
import {GenresService} from "../genres/genres.service";
import {CreateBandInput} from "../bands/dto/create-band.input";
import {DeletedSomething} from "../artists/entities/delete.entity";

@Resolver(() => Band)
export class BandsResolver {
    constructor(
        private bandsService: BandsService,
        private genresService: GenresService
    ) {}


    @Query(() => [Band], {name: 'bands'})
    getAll() {
        return this.bandsService.findAll();
    }

    @Query(() => Band, { name: 'band' })
    async findId(@Args('id', { type: () => ID}) id: string) {
        return this.bandsService.findByIdOnlyOne(id);
    }

    @ResolveField(() => [Genre])
    async genres(@Parent() band: Band) {
        const { genresIds } = band;
        return await this.genresService.findByIds(genresIds);
    }

    @Mutation(returns => Band)
    async createBand(@Args('createBandInput') createBandInput: CreateBandInput) {
        return await this.bandsService.createBand(createBandInput);
    }

    @Mutation(() => DeletedSomething)
    async deleteBand(@Args('id', { type: () => ID }) id: string) {
        return await this.bandsService.deleteBand(id);
    }
}