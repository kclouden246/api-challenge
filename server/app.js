const fs = require("fs")
const bodyParser = require("body-parser")

const express = require('express')
const app = express()
const port = 3001

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/movies', (req, res) {
    //our code goes here
})

app.post('/reviews',function(req,res){
 //YOUR CODE GOES HERE
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
