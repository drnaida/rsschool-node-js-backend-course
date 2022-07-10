import {Query, Resolver, Args, ResolveField, Parent, Mutation, ID} from '@nestjs/graphql';
import { Artist } from './entities/artists.entity';
import {ArtistsService} from "./artists.service";
import {Band} from "../bands/entities/bands.entity";
import {BandsService} from "../bands/bands.service";
import {User} from "../users/entities/users.entity";
import {CreateArtistInput} from "../artists/dto/create-artist.input";
import {DeletedSomething} from "./entities/delete.entity";
import {UpdateArtistInput} from "./dto/update-artist.input";
import {PaginationInput} from "./dto/pagination.entity";

@Resolver(() => Artist)
export class ArtistsResolver {
    constructor(
        private artistsService: ArtistsService,
        private bandsService: BandsService
    ) {}


    @Query(() => [Artist], {name: 'artists'})
    getAll(@Args(
        {name: 'setPaginationInput',
            defaultValue: {limit: 2, offset: 0},
            nullable: true
        }) setPaginationInput: PaginationInput) {
        return this.artistsService.findAll(setPaginationInput);
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

    @Mutation(returns => Artist)
    async createArtist(@Args('createArtistInput') createArtistInput: CreateArtistInput) {
        return await this.artistsService.createArtist(createArtistInput);
    }

    @Mutation(() => DeletedSomething)
    async deleteArtist(@Args('id', { type: () => ID }) id: string) {
        return await this.artistsService.deleteArtist(id);
    }

    @Mutation(returns => Artist)
    async updateArtist(
        @Args('id') id: string,
        @Args('updateArtistInput', { type: () => UpdateArtistInput, nullable: false })
        updateArtistInput: UpdateArtistInput
    ) {
        return await this.artistsService.updateArtist(
            id,
            updateArtistInput,
        );
    }
}