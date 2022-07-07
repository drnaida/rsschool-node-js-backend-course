import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateFavouriteInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
