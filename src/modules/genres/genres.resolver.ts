import {Args, ID, Mutation, Query, Resolver} from '@nestjs/graphql';
import { Genre } from './entities/genres.entity';
import {GenresService} from "./genres.service";
import {Band} from "../bands/entities/bands.entity";
import {Artist} from "../artists/entities/artists.entity";
import {CreateGenreInput} from "../genres/dto/create-genre.input";
import {DeletedSomething} from "../artists/entities/delete.entity";

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

    @Mutation(returns => Genre)
    async createGenre(@Args('createGenreInput') createGenreInput: CreateGenreInput) {
        return await this.genresService.createGenre(createGenreInput);
    }

    @Mutation(() => DeletedSomething)
    async deleteGenre(@Args('id', { type: () => ID }) id: string) {
        return await this.genresService.deleteGenre(id);
    }
}