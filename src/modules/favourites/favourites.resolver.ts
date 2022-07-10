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

@Resolver(() => Favourites)
export class FavouritesResolver {
    constructor(
        private favouritesService: FavouritesService,
        private bandsService: BandsService
    ) {}


    @Query(() => Favourites, {name: 'favourites'})
    getAll(@Args('setPaginationInput', { type: () => PaginationInput, nullable: true, defaultValue: {limit: 2, offset: 0} })
        setPaginationInput: PaginationInput
    ) {
        return this.favouritesService.findAll();
    }

    @ResolveField(() => [Band])
    async bands(@Parent() artist: Artist) {
        const { bandsIds } = artist;
        return await this.bandsService.findByIds(bandsIds);
    }

    @Mutation(returns => Artist)
    async createArtist(@Args('createArtistInput') createArtistInput: CreateArtistInput) {
        return await this.favouritesService.createArtist(createArtistInput);
    }

    @Mutation(() => DeletedSomething)
    async deleteArtist(@Args('id', { type: () => ID }) id: string) {
        return await this.favouritesService.deleteArtist(id);
    }
}