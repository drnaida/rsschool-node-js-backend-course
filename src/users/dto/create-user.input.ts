import {Field, Float, InputType} from "@nestjs/graphql";

@InputType()
export class CreateUserInput {
    @Field({nullable: true})
    firstName: string;

    @Field({nullable: true})
    lastName: string;

    @Field({nullable: true})
    password: string;

    @Field({nullable: false})
    email: string;

    @Field(() => [String], {nullable: true})
    favouriteArtistIds: [string];
}