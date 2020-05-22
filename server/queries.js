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

const createReview = (request, response) => {
    const { movieId, title, review } = request.body;
  
    pool.query(
      `INSERT INTO playlist (movieId, title, review) VALUES ($1, $2, $3)`,
      [movieId, title, review],
      (error, results) => {
        if (error) {
          throw error;
        }
        response.status(201).send("Review added");
      }
    );
  };

module.exports = {getMovies, createReview}