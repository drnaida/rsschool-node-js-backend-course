import {Query, Resolver, Args, ResolveField, Parent, Mutation, ID} from '@nestjs/graphql';
import { Track } from './entities/tracks.entity';
import {TracksService} from "./tracks.service";
import {Band} from "../bands/entities/bands.entity";
import {Artist} from "../artists/entities/artists.entity";
import {Genre} from "../genres/entities/genres.entity";
import {BandsService} from "../bands/bands.service";
import {ArtistsService} from "../artists/artists.service";
import {GenresService} from "../genres/genres.service";
import {AlbumsService} from "../albums/albums.service";
import {Album} from "../albums/entities/albums.entity";
import {CreateTrackInput} from "../tracks/dto/create-track.input";
import {DeletedSomething} from "../artists/entities/delete.entity";
import {UpdateTrackInput} from "../tracks/dto/update-track.input";
import {PaginationInput} from "../artists/dto/pagination.entity";

@Resolver(() => Track)
export class TracksResolver {
    constructor(
        private tracksService: TracksService,
        private bandsService: BandsService,
        private artistsService: ArtistsService,
        private genresService: GenresService,
        private albumsService: AlbumsService
    ) {}

    @Query(() => [Track], {name: 'tracks'})
    async getAll(@Args('setPaginationInput', { type: () => PaginationInput, nullable: true, defaultValue: {limit: 2, offset: 0} })
                         setPaginationInput: PaginationInput
    ) {
        return this.tracksService.findAll(setPaginationInput);
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

    @ResolveField(() => [Album])
    album(@Parent() track: Track) {
        const { albumId } = track;
        if (!albumId) {
            return null;
        }
        return this.albumsService.findById(albumId);
    }

    @Mutation(returns => Track)
    async createTrack(@Args('createTrackInput') createTrackInput: CreateTrackInput) {
        return await this.tracksService.createTrack(createTrackInput);
    }

    @Mutation(() => DeletedSomething)
    async deleteTrack(@Args('id', { type: () => ID }) id: string) {
        return await this.tracksService.deleteTrack(id);
    }

    @Mutation(returns => Track)
    async updateTrack(
        @Args('id') id: string,
        @Args('updateTrackInput', { type: () => UpdateTrackInput, nullable: false })
            updateTrackInput: UpdateTrackInput
    ) {
        return await this.tracksService.updateTrack(
            id,
            updateTrackInput,
        );
    }
}