import { Query, Resolver } from '@nestjs/graphql';
import { Band } from './entities/bands.entity';
import {BandsService} from "./bands.service";

@Resolver(() => Band)
export class BandsResolver {
    constructor(private bandsService: BandsService) {}


    @Query(() => [Band], {name: 'bands'})
    getAll() {
        return this.bandsService.findAll();
    }
}