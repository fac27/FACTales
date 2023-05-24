const { reset } = require("./test-helper_functions.js");
const { assert } = require("node:assert");
const { insertMovie } = require("../src/model/movies.js");
const { movies } = require("../src/routes/movies.js");

function testInserts() {
  reset();

  movies.insertMovie("Dave", "WILLOW", "Someone");
  movies.insertMovie("Jeoff", "Fast X", "Someone else");
  movies.insertMovie("Chanelle", "Shrek", "Someone different");
  movies.insertMovie("Gabrielle", "Iron Man", "Someone nonexistent");


  const moviesList = model.selectMovieRecs();

  movies.insertMovie("Dave", "WILLOW", "Someone");
  movies.insertMovie("Jeoff", "Fast X", "Someone else");
  movies.insertMovie("Chanelle", "Shrek", "Someone different");
  movies.insertMovie("Gabrielle", "Iron Man", "Someone nonexistent");

  assert.deepEqual(moviesList[0].user_name, "Dave", "found daves movie");
  assert.deepEqual(
    moviesList[0].director,
    "Someone",
    "found daves movies director"
  );
}

function testSelects() {
  reset();

  movies.insertMovie("Dave", "WILLOW", "Someone");
  movies.insertMovie("Jeoff", "Fast X", "Someone else");
  movies.insertMovie("Chanelle", "Shrek", "Someone different");
  movies.insertMovie("Gabrielle", "Iron Man", "Someone nonexistent");

  const moviesList = model.selectMovieRecs();
  assert.deepEqual(moviesList.length, 4);
}

function testViewRecs() {
  reset();

  movies.insertMovie("Dave", "WILLOW", "Someone");
  movies.insertMovie("Jeoff", "Fast X", "Someone else");
  movies.insertMovie("Chanelle", "Shrek", "Someone different");
  movies.insertMovie("Gabrielle", "Iron Man", "Someone nonexistent");

  const htmlList = viewRecommendations();
  const daveExists = htmlList.find("Dave");
  const shrekExists = htmlList.find("Shrek");

  assert.deepEqual(daveExists, true, "html included dave");
  assert.deepEqual(shrekExists, true, "html included shrek");
}

module.exports = {testInserts, testSelects, testViewRecs}