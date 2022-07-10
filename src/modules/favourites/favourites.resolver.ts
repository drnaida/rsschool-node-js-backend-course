import {Query, Resolver, Args, ResolveField, Parent, Mutation, ID} from '@nestjs/graphql';
import { Artist } from '../artists/entities/artists.entity';
import {FavouritesService} from "./favourites.service";
import {Band} from "../bands/entities/bands.entity";
import {BandsService} from "../bands/bands.service";
import {User} from "../users/entities/users.entity";
import {CreateArtistInput} from "../artists/dto/create-artist.input";
import {DeletedSomething} from "../artists/entities/delete.entity";
import {PaginationInput} from "../artists//dto/pagination.entity";
import {Favourites} from "./entities/favourites.entity";
import {TracksService} from "../tracks/tracks.service";
import {GenresService} from "../genres/genres.service";
import {ArtistsService} from "../artists/artists.service";
import {CreateFavourites} from "./dto/create-fav.input";

@Resolver(() => Favourites)
export class FavouritesResolver {
    constructor(
        private favouritesService: FavouritesService,
        private bandsService: BandsService,
        private tracksService: TracksService,
        private genresService: GenresService,
        private artistsService: ArtistsService
    ) {}


    @Query(() => Favourites, {name: 'favourites'})
    getAll(@Args('setPaginationInput', { type: () => PaginationInput, nullable: true, defaultValue: {limit: 2, offset: 0} })
        setPaginationInput: PaginationInput
    ) {
        return this.favouritesService.findAll();
    }


    @Mutation(() => Favourites)
    addTrackToFavourites(
        @Args('id', { type: () => ID, nullable: false }) id: string,
    ) {
        return this.favouritesService.add('tracks', id);
    }

    @Mutation(() => Favourites)
    addBandToFavourites(
        @Args('id', { type: () => ID, nullable: false }) id: string,
    ) {
        return this.favouritesService.add('bands', id);
    }

    @Mutation(() => Favourites)
    addArtistToFavourites(
        @Args('id', { type: () => ID, nullable: false }) id: string,
    ) {
        return this.favouritesService.add('artists', id);
    }

    @Mutation(() => Favourites)
    addGenreToFavourites(
        @Args('id', { type: () => ID, nullable: false }) id: string,
    ) {
        return this.favouritesService.add('genres', id);
    }

    @ResolveField()
    async genres(@Parent() favourites: Favourites) {
        const { genresIds } = favourites;
        return this.genresService.findByIds(genresIds);
    }

    @ResolveField()
    async bands(@Parent() favourites: Favourites) {
        const { bandsIds } = favourites;
        return await this.bandsService.findByIds(bandsIds);
    }

    @ResolveField()
    async artists(@Parent() favourites: Favourites) {
        const { artistsIds } = favourites;
        return this.artistsService.findByIds(artistsIds);
    }

    @ResolveField()
    async tracks(@Parent() favourites: Favourites) {
        const { tracksIds } = favourites;
        return this.tracksService.findByIds(tracksIds);
    }
}