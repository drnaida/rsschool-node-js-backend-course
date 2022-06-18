Example of body in POST
{
    "username": "DRNaida",
    "age": 18,
    "hobbies": ["programming", "skating"]
}

**GET request**
About validating while getting users

if you type in POSTMAN GET reques to
127.0.0.1:5000/api/users/d820256b-478d-40ae-97fe-96a67bdb5b84
you will get 404 if this is a uuid but this id doesn't exist.

If you type in POSTMAN get request to
127.0.0.1:5000/api/users/bla-bla-bla
you will get 400 because it will not go through uuid validation

**POST Request**
If you type in POSTMAN POST request like this

{
    "username": "Test",
    "age": 18,
    "surname": 22,
    "hobbies": ["42"]
}

with "surname" element that is not supposed to be, all of the data but 
surname will be written to storage and "surname" will be ignored.


**PUT request**
To underline, it is a PUT request, not a PATCH request, so please
type the whole object like below:
{
    "username": "Test",
    "age": 18,
    "hobbies": ["sdfds"]
}

if you type only 
{
    "username" "NewNAME"
}

you will get an error

**DELETE request**