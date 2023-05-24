const { selectMovieRecs } = require("../model/movie-recs.js");
const { displayBookRecs } = require('../model/books.js');

function viewRecommendations() {
  let recs = selectMovieRecs();
  // if (type === 'movie') method = selectMovieRecs();
  const recList = recs.map((rec) => {
    /*HTML*/ `
      <li>
        ${rec.user_name} recommends ${rec.movie_title}
      </li>
    `;
  }).join('');
  
  return /*html*/ `
  <ul>
    ${recList}
  </ul>
  `
};

module.exports = viewRecommendations;
