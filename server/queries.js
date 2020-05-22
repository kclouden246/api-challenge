const Pool = require("pg").Pool;
const pool = new Pool({
  user: "kclouden",
  host: "localhost",
  database: "netflix",
  password: "pw",
  port: 5432,
});

const getMovies = (request, response) => {
    pool.query("SELECT * FROM playlist", (error, results) => {
        if(error){
            throw error
        }
        response.status(200).json(results.rows);
    })
}

const getReviews = (request, response) => {
    pool.query("SELECT * FROM playlist", (error, results) => {
        if(error){
            throw error
        }
        response.status(200).json(results.rows);
    })
}

module.exports = {getMovies, getReviews}