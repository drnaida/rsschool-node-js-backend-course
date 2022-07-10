import {Args, ID, Mutation, Query, Resolver} from '@nestjs/graphql';
import { Genre } from './entities/genres.entity';
import {GenresService} from "./genres.service";
import {Band} from "../bands/entities/bands.entity";
import {Artist} from "../artists/entities/artists.entity";
import {CreateGenreInput} from "../genres/dto/create-genre.input";
import {DeletedSomething} from "../artists/entities/delete.entity";
import {Album} from "../albums/entities/albums.entity";
import {UpdateGenreInput} from "../genres/dto/update-genre.input";
import {PaginationInput} from "../artists/dto/pagination.entity";

@Resolver(() => Genre)
export class GenresResolver {
    constructor(private genresService: GenresService) {}


    @Query(() => [Genre], {name: 'genres'})
    getAll(@Args('setPaginationInput', { type: () => PaginationInput, nullable: true, defaultValue: {limit: 2, offset: 0} })
               setPaginationInput: PaginationInput
    ) {
        return this.genresService.findAll(setPaginationInput);
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

    @Mutation(returns => Genre)
    async updateGenre(
        @Args('id') id: string,
        @Args('updateGenreInput', { type: () => UpdateGenreInput, nullable: false })
            updateGenreInput: UpdateGenreInput
    ) {
        return await this.genresService.updateGenre(
            id,
            updateGenreInput,
        );
    }
}