import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import {AppResolver} from "./app.resolver";
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import {ArtistsModule} from "./artists/artists.module";
import {BandsModule} from "./bands/bands.module";
import {GenresModule} from "./genres/genres.module";

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: true,
        }),
        ArtistsModule,
        BandsModule,
        GenresModule
    ],
    controllers: [AppController],
    providers: [AppService, AppResolver],
})
export class AppModule {}