import {Args, ID, Query, Resolver} from '@nestjs/graphql';
import { Genre } from './entities/genres.entity';
import {GenresService} from "./genres.service";
import {Band} from "../bands/entities/bands.entity";

@Resolver(() => Genre)
export class GenresResolver {
    constructor(private genresService: GenresService) {}


    @Query(() => [Genre], {name: 'genres'})
    getAll() {
        return this.genresService.findAll();
    }

    @Query(() => Genre, { name: 'genre' })
    async findId(@Args('id', { type: () => ID}) id: string) {
        return this.genresService.findByIdOnlyOne(id);
    }
}