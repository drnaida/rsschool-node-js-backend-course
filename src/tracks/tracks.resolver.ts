import { Query, Resolver, Args, ResolveField, Parent } from '@nestjs/graphql';
import { Track } from './entities/tracks.entity';
import {TracksService} from "./tracks.service";
import {Band} from "../bands/entities/bands.entity";
import {Artist} from "../artists/entities/artists.entity";
import {Genre} from "../genres/entities/genres.entity";
import {BandsService} from "../bands/bands.service";
import {ArtistsService} from "../artists/artists.service";
import {GenresService} from "../genres/genres.service";

@Resolver(() => Track)
export class TracksResolver {
    constructor(
        private tracksService: TracksService,
        private bandsService: BandsService,
        private artistsService: ArtistsService,
        private genresService: GenresService
    ) {}


    @Query(() => [Track], {name: 'tracks'})
    getAll() {
        return this.tracksService.findAll();
    }

    @Query(returns => Track, { name: 'track' })
    async getAuthor(@Args('id', { type: () => String }) id: string) {
        return this.tracksService.findById(id);
    }

    @ResolveField(() => [Band])
    async bands(@Parent() track: Track) {
        const { bandsIds } = track;
        return await this.bandsService.findByIds(bandsIds);
    }

    @ResolveField(() => [Artist])
    async artists(@Parent() track: Track) {
        const { artistsIds } = track;
        return await this.artistsService.findByIds(artistsIds);
    }

    @ResolveField(() => [Genre])
    async genres(@Parent() track: Track) {
        const { genresIds } = track;
        return await this.genresService.findByIds(genresIds);
    }
}