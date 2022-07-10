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
import {GraphQLError} from "graphql";
import {FavouritesModule} from "./modules/favourites/favourites.module";

@Module({
    imports: [
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver: ApolloDriver,
            autoSchemaFile: true,
            formatError: (error) => {
              const err = error.originalError;
              return new GraphQLError(err.message);
            },
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
        UsersModule,
        FavouritesModule
    ],
    controllers: [AppController],
    providers: [AppService, AppResolver],
})
export class AppModule {}