const { assert } = require('node:assert');

const db = require('../src/database/db.js');
const { reset } = require('./test-helper_functions.js');
const model = require('../src/model/movie-recs.js'); // review file name in path
const { viewRecommendations } = require('../src/templates/view-recs.js');

module.exports = { homePage };

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
  assert.deepEqual(moviesList[0].user_name, 'Dave', 'found daves movie');
  assert.deepEqual(
    moviesList[0].director,
    'Someone',
    'found daves movies director'
  );
  assert.deepEqual(moviesList.length, 4);

  const htmlList = viewRecommendations();
  const daveExists = htmlList.find('Dave');
  const shrekExists = htmlList.find('Shrek');

  assert.deepEqual(daveExists, true, 'html included dave');
  assert.deepEqual(shrekExists, true, 'html included shrek');
}
