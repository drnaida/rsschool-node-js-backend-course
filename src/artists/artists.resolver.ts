import { Query, Resolver } from '@nestjs/graphql';
import { Artist } from './entities/artists.entity';
import {ArtistsService} from "./artists.service";

@Resolver(() => Artist)
export class ArtistsResolver {
    constructor(private artistsService: ArtistsService) {}


    @Query(() => [Artist], {name: 'artists'})
    getAll() {
        return this.artistsService.findAll();
    }
}