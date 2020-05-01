const supertest = require('supertest');
const express = require('express');

const app = express();

// describe('GET /movies', function() {
//   it('responds with json', function(done) {
//     request(app)
//       .get('http://localhost:3001/movies')
//       .set('Content-Type', 'application/json')
//       .expect('Content-Type', "/json/")
//       .expect(200)
//       .end(function(err, res) {
//         if (err) return done(err);
//         done();
//       });
//   });
// });


test("GET /", done => {
  supertest(app)
  .get('/')
  .expect(200, done);
})
