const fs = require("fs")
const bodyParser = require("body-parser")

const express = require('express')
const app = express()
const port = 3001

const movies = JSON.parse(fs.readFileSync("movies.JSON"))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/", (req, res) => {
  res.send({greeting: "Hello World"})
})

app.get('/movies', (req, res) => {
    res.json(movies)
}); 

// app.post('/reviews',function(req,res){
//  //YOUR CODE GOES
// });

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))


