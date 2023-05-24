const { assert } = require('node:assert');

const db = require('../src/database/db.js');
const { reset } = require('./test-helper_functions.js');
const model = require('../model/movie-recs.js'); // review file name in path
const { viewRecommendations } = require('../templates/view-recs.js');

function homePage() {
  reset();

  movies.insertMovie('Dave', 'WILLOW', 'Someone');
  movies.insertMovie('Jeoff', 'Fast X', 'Someone else');
  movies.insertMovie('Chanelle', 'Shrek', 'Someone different');
  movies.insertMovie('Gabrielle', 'Iron Man', 'Someone nonexistent');
  // const movie_id = db.prepare(/*sql*/ `SELECT movie_id FROM movies WHERE name = 'Dave'`)
  // assert(movie_id, 1)

  const moviesList = model.selectMovieRecs();
  //   check that all movies are correct
  assert(moviesList[0].user_name, 'Dave');
  assert(moviesList[0].director, 'Someone');
  assert(moviesList.length, 4);

  const htmlList = viewRecommendations();
  const daveExists = htmlList.find('Dave');
  const shrekExists = htmlList.find('Shrek');

  assert(daveExists, true);
  assert(shrekExists, true);
}
