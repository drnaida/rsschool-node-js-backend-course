import { Field, Float, Int, ID, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class User {
    @Field(() => ID, { nullable: false })
    id: string;

    @Field({nullable: true})
    firstName: string;

    @Field({nullable: true})
    lastName: string;

    @Field({nullable: false})
    password: string;

    @Field({nullable: false})
    email: string
}