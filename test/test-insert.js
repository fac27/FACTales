const { reset } = require("./test-helper_functions.js");
const { assert } = require("node:assert");
const { insertMovie } = require("../src/model/movies.js");
// const { movies } = require("../src/routes/movies.js");
const { db } = require("../src/database/db.js");
const { seed } = require("../src/database/seed.js");

function testInserts() {
  // reset();

  insertMovie("Chanelle", "Shrek", "Someone different");

  const selectedMovie = db.exec(
    /*sql*/ `SELECT movie_title FROM movies WHERE movie_title = 'shrek'`
  );

  assert.match(/(shrek)/g, selectedMovie);
}

function testSelects() {
  // reset();

  insertMovie("Dave", "WILLOW", "Someone");
  insertMovie("Jeoff", "Fast X", "Someone else");
  insertMovie("Chanelle", "Shrek", "Someone different");
  insertMovie("Gabrielle", "Iron Man", "Someone nonexistent");

  const moviesList = model.selectMovieRecs();

  assert.equal(moviesList.length, 4);
}

function testViewRecs() {
  // reset();

  insertMovie("Chanelle", "Shrek", "Someone different");

  const htmlList = viewRecommendations();

  assert.match(/(shrek)/g, htmlList);
}

module.exports = { testInserts, testSelects, testViewRecs };
