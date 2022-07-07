import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { FavouritesService } from './favourites.service';
import { Favourite } from './entities/favourite.entity';
import { CreateFavouriteInput } from './dto/create-favourite.input';
import { UpdateFavouriteInput } from './dto/update-favourite.input';

@Resolver(() => Favourite)
export class FavouritesResolver {
  constructor(private readonly favouritesService: FavouritesService) {}

  @Mutation(() => Favourite)
  createFavourite(@Args('createFavouriteInput') createFavouriteInput: CreateFavouriteInput) {
    return this.favouritesService.create(createFavouriteInput);
  }

  @Query(() => [Favourite], { name: 'favourites' })
  findAll() {
    return this.favouritesService.findAll();
  }

  @Query(() => Favourite, { name: 'favourite' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.favouritesService.findOne(id);
  }

  @Mutation(() => Favourite)
  updateFavourite(@Args('updateFavouriteInput') updateFavouriteInput: UpdateFavouriteInput) {
    return this.favouritesService.update(updateFavouriteInput.id, updateFavouriteInput);
  }

  @Mutation(() => Favourite)
  removeFavourite(@Args('id', { type: () => Int }) id: number) {
    return this.favouritesService.remove(id);
  }
}
