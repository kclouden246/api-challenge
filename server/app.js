//const fs = require("fs")
const bodyParser = require("body-parser")

const express = require('express')
const app = express()
const port = 3008

const movies = require("./queries")

//const movies = JSON.parse(fs.readFileSync("movies.JSON"))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.send({greeting: "Hello World"})
})

//app.get('/movies', (req, res) => {
  //res.json(movies)
//}); 

app.get('/movies', movies.getMovies)

app.post('/reviews', movies.createReview)


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


module.exports = app
