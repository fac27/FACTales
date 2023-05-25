const db = require("../src/database/db.js");

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
  `);
}

module.exports = { reset };
