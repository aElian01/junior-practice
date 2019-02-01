const mysql = require('mysql');
const myConfig = require('./config.js');

const connection = mysql.createConnection(myConfig);

const getAllMovies = function (callback) {
  connection.query('SELECT * FROM movies', (error, results) => {
    if (error) {
      console.log(error, 'Error with getAll From DB!');
      callback(error, null);
    } else {
      console.log(results, 'Results from getAllMovies from DB!');
      callback(null, results);
    }
  });
}

const postMovies = function (body, callback) {
  console.log(body, 'what are we!');

  connection.query('INSERT into movies(title, genre) values(?, ?)',
    [body.title, body.genre],
    (error, results) => {
      if (error) {
        console.log(error, 'Error with DB POST!!!');
        callback(error, null);
      } else {
        console.log(results, 'Results from POST ON DB!!!! SUCESSSSSSSSSSS');
        callback(null, results);
      }
    })
}


module.exports = {
  getAllMovies,
  postMovies,
  deleteMovies
}