const db = require('../database/db.js');
const { selectUser } = require('./users.js');

module.exports = { insertMovie };

const select_movie = db.prepare(/*sql*/ `
  SELECT movie_id FROM movies WHERE movie = ? AND author = ? LIMIT 1
`);

const create_movie = db.prepare(/*sql*/ `
  INSERT INTO movies (movie, director) VALUES (?, ?) RETURNING Movie_id
`);

const create_movie_recommendation = db.prepare(/*sql*/ `
  INSERT INTO movie_recommendations (user_id, movie_id) VALUES (?, ?)
`);

function insertMovie(user, movie, author) {
  let movie_id = select_movie.get(movie, author);
  if (movie_id === undefined) {
    console.log('creating movie');
    movie_id = create_movie.get(movie, author);
  }
  console.log(user);
  const user_id = selectUser(user);
  console.log('user_id', user_id);
  create_movie_recommendation.run(user_id, movie_id.movie_id);
}
