import { Field, Float, Int, ID, ObjectType} from '@nestjs/graphql';

@ObjectType()
export class jwt {
    @Field({nullable: false})
    jwt: string;
}