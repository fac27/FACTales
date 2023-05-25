const db = require('../database/db.js');
const { selectUser } = require('./users.js');

module.exports = { insertMovie };

const select_movie = db.prepare(/*sql*/ `
  SELECT movie_id FROM movies WHERE movie_title = ? AND director = ? LIMIT 1
`);

const insert_movie = db.prepare(/*sql*/ `
  INSERT INTO movies (movie_title, director) VALUES (?, ?) RETURNING Movie_id
`);

const insert_movie_recommendation = db.prepare(/*sql*/ `
  INSERT INTO movie_recommendations (user_id, movie_id) VALUES (?, ?)
`);

function insertMovie(user, movie, director) {
  const user_id = selectUser(user);
  let movie_id = select_movie.get(movie, director);
  if (movie_id === undefined) {
    console.log(user_id, 'creating movie');
    movie_id = insert_movie.get(movie, director);
  }
  insert_movie_recommendation.run(user_id, movie_id.movie_id);
}
