import { Query, Resolver, Args, ResolveField, Parent } from '@nestjs/graphql';
import { Artist } from './entities/artists.entity';
import {ArtistsService} from "./artists.service";
import {Band} from "../bands/entities/bands.entity";
import {BandsService} from "../bands/bands.service";

@Resolver(() => Artist)
export class ArtistsResolver {
    constructor(
        private artistsService: ArtistsService,
        private bandsService: BandsService
    ) {}


    @Query(() => [Artist], {name: 'artists'})
    getAll() {
        return this.artistsService.findAll();
    }

    @Query(returns => Artist, { name: 'artist' })
    async getAuthor(@Args('id', { type: () => String }) id: string) {
        return this.artistsService.findById(id);
    }

    @ResolveField(() => [Band])
    async bands(@Parent() artist: Artist) {
        const { bandsIds } = artist;
        return await this.bandsService.findByIds(bandsIds);
    }
}