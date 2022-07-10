import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class PaginationInput {
    @Field({nullable: true})
    limit: number;

    @Field({nullable: true})
    offset: number;
}