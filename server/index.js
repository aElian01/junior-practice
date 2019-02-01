const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { getAllMovies, postMovies, deleteMovies } = require('../database/index.js');
const port = 5000;

app.use(bodyParser.json());
// the exact same as === app.use(bodyParser.json());

app.use(express.static(__dirname + '../client/dist'))
// file pathing to index html folder


app.get('/api/movies', (req, res) => {

  getAllMovies((error, results) => {
    if (error) {
      console.log(error, 'Get All Movies on SERVER!');
      res.status(500).send(error);
    } else {
      console.log(results, 'Results from getALl SERVER!');
      res.json(results);
    }
  });

});


app.post('/api/movies', (req, res) => {
  console.log(req.body, 'Did i get stuff????/');
  postMovies(req.body, (error, results) => {
    if (error) {
      console.log(error, 'Error with POST ON SERVER!');
      res.status(500).send(error);
    } else {
      console.log(results, 'Results from Post SERVER!');
      res.json(results);
    }
  })
})



app.listen(port, (error) => {
  if (error) {
    console.log(error, 'Error Not Listening to SERVER/PORT!!');
  } else {
    console.log(`Listening to port ${port}!!!`);
  }
});