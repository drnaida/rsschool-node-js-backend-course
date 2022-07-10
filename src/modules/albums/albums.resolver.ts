import {Query, Resolver, Args, ResolveField, Parent, Mutation, ID} from '@nestjs/graphql';
import { Album } from './entities/albums.entity';
import {AlbumsService} from "./albums.service";
import {Band} from "../bands/entities/bands.entity";
import {Artist} from "../artists/entities/artists.entity";
import {Genre} from "../genres/entities/genres.entity";
import {BandsService} from "../bands/bands.service";
import {ArtistsService} from "../artists/artists.service";
import {GenresService} from "../genres/genres.service";
import {Track} from "../tracks/entities/tracks.entity";
import {TracksService} from "../tracks/tracks.service";
import {CreateAlbumInput} from "../albums/dto/create-album.input";
import {DeletedSomething} from "../artists/entities/delete.entity";

@Resolver(() => Album)
export class AlbumsResolver {
    constructor(
        private albumsService: AlbumsService,
        private bandsService: BandsService,
        private artistsService: ArtistsService,
        private genresService: GenresService,
        private tracksService: TracksService
    ) {}


    @Query(() => [Album], {name: 'albums'})
    getAll() {
        return this.albumsService.findAll();
    }

    @Query(returns => Album, { name: 'album' })
    async getAuthor(@Args('id', { type: () => String }) id: string) {
        return this.albumsService.findById(id);
    }

    @ResolveField(() => [Band])
    async bands(@Parent() album: Album) {
        const { bandsIds } = album;
        return await this.bandsService.findByIds(bandsIds);
    }

    @ResolveField(() => [Artist])
    async artists(@Parent() album: Album) {
        const { artistsIds } = album;
        return await this.artistsService.findByIds(artistsIds);
    }

    @ResolveField(() => [Genre])
    async genres(@Parent() album: Album) {
        const { genresIds } = album;
        return await this.genresService.findByIds(genresIds);
    }

    @ResolveField(() => [Track])
    async tracks(@Parent() album: Album) {
        const { trackIds } = album;
        return await this.tracksService.findByIds(trackIds);
    }

    @Mutation(returns => Album)
    async createAlbum(@Args('createAlbumInput') createAlbumInput: CreateAlbumInput) {
        return await this.albumsService.createAlbum(createAlbumInput);
    }

    @Mutation(() => DeletedSomething)
    async deleteAlbum(@Args('id', { type: () => ID }) id: string) {
        return await this.albumsService.deleteAlbum(id);
    }
}