import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Favourite {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
