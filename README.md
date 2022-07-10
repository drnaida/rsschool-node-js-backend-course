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