import { Field, Float, Int, ID, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class User {
    @Field(() => ID, {name: 'id', description: 'ID of the question', nullable: false })
    _id: string;

    @Field({nullable: true})
    firstName: string;

    @Field({nullable: true})
    lastName: string;

    @Field({nullable: false})
    password: string;

    @Field({nullable: false})
    email: string
}