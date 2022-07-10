import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { GraphQLModule } from '@nestjs/graphql';
import {AppResolver} from "./app.resolver";
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import {ArtistsModule} from "./modules/artists/artists.module";
import {BandsModule} from "./modules/bands/bands.module";
import {GenresModule} from "./modules/genres/genres.module";
import {AlbumsModule} from "./modules/albums/albums.module";
import {TracksModule} from "./modules/tracks/tracks.module";
import {UsersModule} from "./modules/users/users.module";

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: true,
            context: ({ req }): object => {
                const authScope = req.headers.authorization || '';
                process.env.AUTHORIZATION_TOKEN = authScope;
                return { authScope };
            },
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