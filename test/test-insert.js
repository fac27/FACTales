const { reset } = require("./test-helper_functions.js");
const { assert } = require("node:assert");
const { insertMovie } = require("../src/model/movies.js");
const { movies } = require("../src/routes/movies.js");

function testInsert() {
  reset();
  const newMovie = insertMovie(
    "Alphonso",
    "Crimes of the past",
    "David Cronenberg"
  );
  const body = movies.get().body();
  console.log(newMovie)
  assert.match(body, newMovie);
}

module.exports = { testInsert };
