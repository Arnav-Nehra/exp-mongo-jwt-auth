
# exp-mongo-jwt-auth

A small project that uses mongoDB ,jsonwebtoken and express that has some route endpoints
for a simple course selling app which has a admin and user


I haven't used here env file to store the JWT secret key, as this was only for learning purpose.

For authorization middlewares  are used.

To run install:

- npm install express

- npm install mongoose

- npm install jsonwebtoken

- Used Postman to send requests to the backend

## Features

- Allows the admin to signup, signin 
- Create courses
- View Courses
- Allows the user to signup, sigin and purchase a course ( updates DB )
- Used JWT token to signin and workaround with other things
