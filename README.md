# Before testing the application

1. Turn on the mongodb like you did during development
2. Turn on microservices like you did during development
3. Log in using
4. Register

mutation createNewUser($createUserInput: CreateUserInput!) {
    createNewUser(createUserInput: $createUserInput) {
        id
        firstName
        lastName
        email
        password
    }
}

Add to query variables:

{
    "createUserInput": {
        "firstName": "lalala",
        "lastName": "bablalala",
        "email": "email@gmail.com",
        "password": "123123123123"
    }
}


result:
{
  "data": {
    "createNewUser": {
      "id": "62cf258b894bf2e2ff05570a",
      "firstName": "lalala",
      "lastName": "bablalala",
      "email": "email@gmail.com",
      "password": "$2b$10$l7u..FwcmByxSREbPyF7OOSF9Ao/hva8e9fVJWDyKZCaO/bM8T3xS"
    }
  }
}

5. Login / Get JWT token

query {
    jwt(loginInputForJwt:{
    email: "email@gmail.com", password: "123123123123"
    }) {
    jwt
    }
}

Result:

{
  "data": {
    "jwt": {
      "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MmNhNzVkOTgwZDA1ZTEzMDUyMGJiMTUiLCJmaXJzdE5hbWUiOiJsYWxhbGEiLCJsYXN0TmFtZSI6ImJhYmxhbGFsYSIsImVtYWlsIjoiZW1haWxAZ21haWwuY29tIiwiaWF0IjoxNjU3NzQzMDEwfQ.8Gz1gBAgiCZrNGiTauc99CbLCULoeXWxeX2D3qX6d4Y"
    }
  }
}

Use the tocken in HTTP headers for every create/delete/update request or with favorites

![image](https://user-images.githubusercontent.com/32419743/178825742-8165ab20-1dfd-4751-948e-b25cb14d3950.png)


# Get queries

## artist

Don't forget to change the artist "id"

query {
  artist(id: "62cac63e4a8a0cbde9bacb9a") {
    id
    firstName
  	secondName
  	middleName
  	birthDate
  	birthPlace
  	country
  	bands {id}
  	instruments
  }
}

Result:

{
  "data": {
    "artist": {
      "id": "62cac63e4a8a0cbde9bacb9a",
      "firstName": "string",
      "secondName": "str6ing",
      "middleName": "a",
      "birthDate": "04/04/2002",
      "birthPlace": "chicago",
      "country": "Russia",
      "bands": [],
      "instruments": [
        "guitar"
      ]
    }
  }
}

## artists

query {
  artists {
    id
    firstName
  	secondName
  	middleName
  	birthDate
  	birthPlace
  	country
  	bands {id}
  	instruments
  }
}

Result:

{
  "errors": [
    {
      "message": "Cannot return null for non-nullable field Band.id.",
      "extensions": {}
    }
  ],
  "data": {
    "artists": [
      {
        "id": "62c926244a8a0cbde9bac8c3",
        "firstName": "nanana",
        "secondName": "str6ing",
        "middleName": "a",
        "birthDate": "04/04/2002",
        "birthPlace": "chicago",
        "country": "Russia",
        "bands": [],
        "instruments": [
          "guitar"
        ]
      },
      {
        "id": "62c926444a8a0cbde9bac8c5",
        "firstName": "string",
        "secondName": "str6ing",
        "middleName": "a",
        "birthDate": "04/04/2002",
        "birthPlace": "chicago",
        "country": "Russia",
        "bands": null,
        "instruments": [
          "guitar"
        ]
      }
    ]
  }
}

## genre

query {
  genre(id:"62cacf8a2af3f1f1aa9dba0b"){
      id
    }
}

Result: 

{
  "data": {
    "genre": {
      "id": "62cacf8a2af3f1f1aa9dba0b"
    }
  }
}

## genres

query {
  genres {
    id
    name
    description
    year
  }
}

## track

query {
  track (id: "62cab6754fa20d82268eb626"){
    	id
      artists {
        firstName
        country
      }
      genres {
        name
      }
    album {
      id
    }
    }
}

Result:

{
  "data": {
    "track": {
      "id": "62cab6754fa20d82268eb626",
      "artists": [
        {
          "firstName": "string",
          "country": "Russia"
        }
      ],
      "genres": [
        {
          "name": null
        }
      ],
      "album": {
        "id": "62cab2ef6fc8c7aa821a9fd8"
      }
    }
  }
}

## tracks

query {
  tracks {
      artists {
        firstName
        country
      }
      genres {
        name
      }
    album {
      id
    }
    }
}

Result:

{
  "data": {
    "tracks": [
      {
        "artists": [
          {
            "firstName": "string",
            "country": "Russia"
          }
        ],
        "genres": [
          {
            "name": null
          }
        ],
        "album": {
          "id": "62cab2ef6fc8c7aa821a9fd8"
        }
      },
      {
        "artists": [
          {
            "firstName": "string",
            "country": "Russia"
          }
        ],
        "genres": [
          {
            "name": null
          }
        ],
        "album": {
          "id": "62cab2ef6fc8c7aa821a9fd8"
        }
      }
    ]
  }
}

## band

query {
  band(id: "62c9d6f4d7f3a8d697800621") {
    id
    name
    origin
    genres {
      id
    }
    website
  }
}

Result:

{
  "errors": [
    {
      "message": "Cannot return null for non-nullable field Genre.id.",
      "extensions": {}
    }
  ],
  "data": {
    "band": {
      "id": "62c9d6f4d7f3a8d697800621",
      "name": "bbbbbb",
      "origin": "USA",
      "genres": null,
      "website": "https://www.blink182.com"
    }
  }
}

## bands

query {
  bands() {
    id
    name
    origin
    website
  }
}

Result:

{
  "errors": [
    {
      "message": "Cannot return null for non-nullable field Genre.id.",
      "extensions": {}
    }
  ],
  "data": {
    "band": {
      "id": "62c9d6f4d7f3a8d697800621",
      "name": "bbbbbb",
      "origin": "USA",
      "genres": null,
      "website": "https://www.blink182.com"
    }
  }
}

## album

query {
  album(id: "62caafd96fc8c7aa821a9fc1") {
    id
		name
  }
}

Result:

{
  "data": {
    "album": {
      "id": "62caafd96fc8c7aa821a9fc1",
      "name": "nanana"
    }
  }
}

## albums

query {
  albums {
    id
		name
  }
}

Result:

{
  "data": {
    "albums": [
      {
        "id": "62caafd96fc8c7aa821a9fc1",
        "name": "nanana"
      },
      {
        "id": "62cab0036fc8c7aa821a9fc3",
        "name": "Neighborhoods"
      }
    ]
  }
}

## jwt

If you followed the instruction, you already did it.

## user

query {
  user(id: "62c73887cc218a473f2cdabd") {
    id
		password
  }
}

Result:

{
  "data": {
    "user": {
      "id": "62c73887cc218a473f2cdabd",
      "password": "$2b$10$1siZoWUQAGe2wkQj9THobeRrea4lkyGC8A6jybwBfgAnv4XaQzpwq"
    }
  }
}

# Artists mutations

  ## createArtist
  
mutation createArtist($createArtistInput: CreateArtistInput!) {
    createArtist(createArtistInput: $createArtistInput) {
    id
    firstName
    secondName
    middleName
    birthDate
    birthPlace
    bands {
        id
        name
        genres {
            id
            name
        }
    }
    country
    instruments
    }
}

{ "createArtistInput":{
    "firstName": "string",
    "secondName": "str6ing",
    "middleName": "a",
    "birthDate":"04/04/2002",
    "birthPlace": "chicago",
    "country": "Russia",
    "instruments": ["guitar"]
    }   
}

result:
    {
        "data": {
        "createArtist": {
        "id": "62cac63e4a8a0cbde9bacb9a",
        "firstName": "string",
        "secondName": "str6ing",
        "middleName": "a",
        "birthDate": "04/04/2002",
        "birthPlace": "chicago",
        "country": "Russia",
            "instruments": [
            "guitar"
            ]
        }
    }
}
  
  ## deleteArtist
  
  mutation {
        deleteArtist(id: "62c9e14d4fa20d82268eb4ee") {
        deletedCount
        acknowledged
        }
    }
    
   Result:
   
   {
  "data": {
    "deleteArtist": {
      "deletedCount": 1,
      "acknowledged": true
    }
  }
}
  
  ## updateArtist
  
  mutation UpdateArtist($updateArtistInput: UpdateArtistInput!) {
    updateArtist(id: "62c926244a8a0cbde9bac8c3", updateArtistInput: $updateArtistInput) {
        id
        birthDate
        firstName
    }
}

{ "updateArtistInput":{
    "firstName": "nanana"
    }
}

Result:

{
  "data": {
    "updateArtist": {
      "id": "62c926244a8a0cbde9bac8c3",
      "birthDate": "04/04/2002",
      "firstName": "nanana"
    }
  }
}
  
# Genres mutations

  ## createGenre
  
mutation createGenre($createGenreInput: CreateGenreInput!) {
    createGenre(createGenreInput: $createGenreInput) {
        id
        name
        description
        country
        year
    }
}

{ "createGenreInput":{
    "name": "jaz",
    "description": "description",
    "country": "country",
    "year": 1970
    }
}

result:

{
  "data": {
    "createGenre": {
      "id": "62cf2bdaad12fc606bf59e2f",
      "name": "jaz",
      "description": "description",
      "country": "country",
      "year": 1970
    }
  }
}
  
  ## deleteGenre
  
  
    mutation {
        deleteGenre(id: "62c9e14d4fa20d82268eb4ee") {
        deletedCount
        acknowledged
        }
    }
    
   Result:
   
   {
  "data": {
    "deleteGenre": {
      "deletedCount": 1,
      "acknowledged": true
    }
  }
}
  
  ## updateGenre
  
  mutation UpdateGenre($updateGenreInput: UpdateGenreInput!) {
    updateGenre(id: "62cb10662af3f1f1aa9dbab5", updateGenreInput: $updateGenreInput) {
        id
        name
    }
}

{ "updateGenreInput":{
    "name": "nanana"
    }
}

Result:

{
  "data": {
    "updateGenre": {
      "id": "62cb10662af3f1f1aa9dbab5",
      "name": "nanana"
    }
  }
}
  
# Bands mutations

  ## createBand
  
  mutation createBand($createBandInput: CreateBandInput!) {
    createBand(createBandInput: $createBandInput) {
        id
        name
    }
}

{ "createBandInput":{
    "name": "jaz"
    }
}

Result:

{
  "data": {
    "createBand": {
      "id": "62cf2cbdb1d2284bc20da3be",
      "name": "jaz"
    }
  }
}
  
  ## deleteBand
  
    mutation {
        deleteBand(id: "62c9e14d4fa20d82268eb4ee") {
        deletedCount
        acknowledged
        }
    }
    
   Result:
   
   {
  "data": {
    "deleteBand": {
      "deletedCount": 1,
      "acknowledged": true
    }
  }
}
  
  ## updateBand
  
  mutation UpdateBand($updateBandInput: UpdateBandInput!) {
    updateBand(id: "62c9d6e1d7f3a8d69780061d", updateBandInput: $updateBandInput) {
        id
        name
    }
}

{ "updateBandInput":{
    "name": "nanana"
    }
}

Result:

{
  "data": {
    "updateBand": {
      "id": "62c9d6e1d7f3a8d69780061d",
      "name": "nanana"
    }
  }
}
  
# Tracks mutations

  ## createTrack
  
  mutation createTrack($createTrackInput: CreateTrackInput!) {
    createTrack(createTrackInput: $createTrackInput) {
        id
        title
    }
}

{ "createTrackInput":{
    "title": "jaz"
    }
}

Result:

{
  "data": {
    "createTrack": {
      "id": "62cf2cf7aabb914d26159a09",
      "title": "jaz"
    }
  }
}
  
  ## deleteTrack
  
    mutation {
        deleteTrack(id: "62c9e14d4fa20d82268eb4ee") {
        deletedCount
        acknowledged
        }
    }
    
   Result:
   
   {
  "data": {
    "deleteTrack": {
      "deletedCount": 1,
      "acknowledged": true
    }
  }
}
  
  ## updateTrack
  
  mutation UpdateTrack($updateTrackInput: UpdateTrackInput!) {
    updateTrack(id: "62caba2e4fa20d82268eb670", updateTrackInput: $updateTrackInput) {
        id
        title
    }
}

{ "updateTrackInput":{
    "title": "nanana"
    }
}

Result:

{
  "data": {
    "updateTrack": {
      "id": "62caba2e4fa20d82268eb670",
      "title": "nanana"
    }
  }
}
  
# Albums

  ## createAlbum
  
  mutation createAlbum($createAlbumInput: CreateAlbumInput!) {
    createAlbum(createAlbumInput: $createAlbumInput) {
        id
        name
    }
}

{ "createAlbumInput":{
    "name": "jazaaaaaa"
    }
}

Result:

{
  "data": {
    "createAlbum": {
      "id": "62cf2d3a7d76ce999519ef38",
      "name": "jazaaaaaa"
    }
  }
}
  
  ## deleteAlbum
  
    mutation {
        deleteAlbum(id: "62c9e14d4fa20d82268eb4ee") {
        deletedCount
        acknowledged
        }
    }
    
   Result:
   
   {
  "data": {
    "deleteAlbum": {
      "deletedCount": 1,
      "acknowledged": true
    }
  }
}
  
  ## updateAlbum
  
  mutation UpdateAlbum($updateAlbumInput: UpdateAlbumInput!) {
    updateAlbum(id: "62caafd96fc8c7aa821a9fc1", updateAlbumInput: $updateAlbumInput) {
        id
        name
    }
}

{ "updateAlbumInput":{
    "name": "nanana"
    }
}

Result:

{
  "data": {
    "updateAlbum": {
      "id": "62caafd96fc8c7aa821a9fc1",
      "name": "nanana"
    }
  }
}
  
  
# Users

  ## register (you already used it if you followed steps below)
  
# Favourites

  ## Get favourites
  
  query {
  favourites {
    id
    userId
    tracks {
      id
      title
    }
    bands {
      id
      name
    }
    artists {
      id
      firstName
    }
    genres {
      id
      name
    }
  }
}

Result:
{
  "errors": [
    {
      "message": "Request failed with status code 500",
      "extensions": {}
    },
    {
      "message": "Request failed with status code 500",
      "extensions": {}
    }
  ],
  "data": {
    "favourites": {
      "id": "62cb2ef4408a2b6477f68928",
      "userId": "62c86eed80d05e130520bb12",
      "tracks": [],
      "bands": [],
      "artists": null,
      "genres": null
    }
  }
}

  ## addTrackToFavourites
  
  ## addBandToFavourites
  
  ## addArtistToFavourites
  
  ## addGenreToFavourites

# Control pagination in artists

query Artists($setPaginationInput: PaginationInput) {
artists(setPaginationInput: $setPaginationInput) {
id
bands {
id
name
genres {
name
}
}
firstName
secondName
instruments
}
}

{ "setPaginationInput":{
"limit": 1,
"offset": 0
}
}
