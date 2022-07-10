import { Field, ObjectType, Int } from '@nestjs/graphql';

@ObjectType()
export class DeletedSomething {
    @Field()
    acknowledged: boolean;

    @Field(() => Int)
    deletedCount: number;
}