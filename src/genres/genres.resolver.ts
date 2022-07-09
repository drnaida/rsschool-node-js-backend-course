import { Query, Resolver } from '@nestjs/graphql';
import { Genre } from './entities/genres.entity';
import {GenresService} from "./genres.service";

@Resolver(() => Genre)
export class GenresResolver {
    constructor(private genresService: GenresService) {}


    @Query(() => [Genre], {name: 'genres'})
    getAll() {
        return this.genresService.findAll();
    }
}