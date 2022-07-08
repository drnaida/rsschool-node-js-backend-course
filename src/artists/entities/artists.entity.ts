import { Field, Float, Int, ObjectType} from '@nestjs/graphql';
import {Band} from "../../bands/entities/bands.entity";

@ObjectType()
export class Artist {
    @Field(() => Int, {description: 'ID of the question', nullable: false })
    id: number;

    @Field({nullable: true})
    firstName: string;

    @Field({nullable: true})
    secondName: string;

    @Field({nullable: true})
    middleName: string;

    @Field({nullable: true})
    birthDate: string;

    @Field({nullable: true})
    birthPlace: string;

    @Field({nullable: true})
    country: string;

    @Field(()=>[Band], {nullable: true})
    bands: Band[];

    @Field(() => [String], {nullable: true})
    instruments: string[];
}