# Login 

query {
    jwt(loginInputForJwt:{
    email: "anzheli@gmail.com", password: "1980000000"
    }) {
    jwt
    }
}

# Register

mutation createNewUser($createUserInput: CreateUserInput!) {
    createNewUser(createUserInput: $createUserInput) {
        id
        firstName
        lastName
        email
        password
    }
}

{
    "createUserInput": {
        "firstName": "lalala",
        "lastName": "bablalala",
        "email": "email@gmail.com",
        "password": "123123123123"
    }
}

# Create Artist

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