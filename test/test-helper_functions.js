const db = require('../src/database/db.js');

module.exports = reset;

// reset tables before each test
function reset() {
  db.exec(/*sql*/ `
  DELETE FROM 
    movies, 
    books,
    book_recommendations,
    movie_recommendations,
    users
  DELETE FROM sqlite_sequence
  WHERE
    name='movies' OR
    name='books' OR
    name='books_recommendations' OR
    name='movie_recommendations' OR
    name='users'
    `);
}
