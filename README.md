# Outside-In API Testing Challenge 

## Objectives
- Test-drive a new API endpoint to add a review to your database

### Features:
- Test-drive a `POST` request to an endpoint for a new review that successfully adds that data to your database and returns success status in JSON response 

### Back End Service Setup:
- Fork and clone this repo using git
- To install the back end service and dependencies, run `npm install` in the root of the project directory
- To start the server, run `npm run start`
- The server will be available at `http://localhost:3001` 

#### Available Service Endpoints
- `GET movies` - returns a list of all movies
- `GET movies/:id` - returns details of a specific movie
- `GET movies?search=<query>` - returns a list of movies filtered on titles matching the given query
- `GET reviews/:movieId` - returns all reviews for a given movie
- `POST reviews` - creates a new review, returns success status in JSON response 
- `POST register` - creates a new user, returns success status in JSON response