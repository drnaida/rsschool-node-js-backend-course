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
import {AlbumsModule} from "./albums/albums.module";
import {TracksModule} from "./tracks/tracks.module";
import {UsersModule} from "./users/users.module";

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: true,
        }),
        ArtistsModule,
        BandsModule,
        GenresModule,
        AlbumsModule,
        TracksModule,
        UsersModule
    ],
    controllers: [AppController],
    providers: [AppService, AppResolver],
})
export class AppModule {}