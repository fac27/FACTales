const db = require('../database/db.js');

module.exports = { listMovies };

const select_movies = db.prepare(/*sql*/ `
  SELECT movie, director FROM movies WHERE movie = ?
`);

function listMovies(movie) {
  return select_movies.all(movie);
}
