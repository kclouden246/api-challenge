const supertest = require('supertest');
// const express = require('express');
const app = require('./app')
const fs = require("fs")
const bodyParser = require("body-parser")

const movies = JSON.parse(fs.readFileSync("movies.JSON"))

test("GET /", done => {
  supertest(app)
    .get("/")
    .expect(200, JSON.stringify({greeting: "Hello World"}))
    .end(done)
})

test("GET /movies", done => {
  supertest(app)
    .get("/movies")
    .set('Content-Type', 'application/json')
    .expect('Content-Type', 'application/json; charset=utf-8')
    .expect(200, movies)
    .end(done)
})


