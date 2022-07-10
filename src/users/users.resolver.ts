import { Query, Resolver, Args, ResolveField, Parent, Mutation } from '@nestjs/graphql';
import { User } from './entities/users.entity';
import {UsersService} from "./users.service";
import {CreateUserInput} from "./dto/create-user.input";

@Resolver(() => User)
export class UsersResolver {
    constructor(
        private usersService: UsersService,
    ) {}

    @Query(returns => User, { name: 'user' })
    async getAuthor(@Args('id', { type: () => String }) id: string) {
        return this.usersService.findById(id);
    }

    @Mutation(returns => User)
    async createNewUser(@Args('createUserInput') createUserInput: CreateUserInput) {
        return await this.usersService.createUser(createUserInput);
    }
}