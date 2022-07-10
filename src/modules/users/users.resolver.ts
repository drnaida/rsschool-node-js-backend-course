import { Query, Resolver, Args, ResolveField, Parent, Mutation } from '@nestjs/graphql';
import { User } from './entities/users.entity';
import {UsersService} from "./users.service";
import {CreateUserInput} from "./dto/create-user.input";
import {jwt} from "./entities/jwt-key.entity";
import {LoginUserInputForJwt} from "./dto/login-user.input";

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

    @Query(() => jwt, {name: 'jwt'})
    async jwt(@Args('loginInputForJwt') loginInputForJwt: LoginUserInputForJwt) {
        return await this.usersService.loginUser(loginInputForJwt);
    }
}