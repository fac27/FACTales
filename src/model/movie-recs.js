const db = require('../database/db.js');

module.exports = { selectMovieRecs };

const select_movie_recs = db.prepare(/*sql*/ `
SELECT 
  users.user_name,
  movies.movie_title
FROM users
JOIN movie_recommendations ON users.user_id = movie_recommendations.user_id
JOIN movies ON movie_recommendations.movie_id = movies.movie_id
`);

function selectMovieRecs() {
  return select_movie_recs.all();
}
