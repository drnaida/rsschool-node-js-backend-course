import {Field, Float, InputType} from "@nestjs/graphql";

@InputType()
export class LoginUserInputForJwt {

    @Field({nullable: false})
    email: string;

    @Field({nullable: false})
    password: string;
}