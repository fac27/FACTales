const { displayMovieRecs } = require('../model/movies.js');
const { displayBookRecs } = require('../model/books.js');

const viewRecommendations = (type) => {
  let method = displayBookRecs;
  if (type === 'movie') method = displayMovieRecs;
  method.forEach((rec) => {
    return /*HTML*/ `
    <div>
      <li>
        <h2> ${rec.user} recommends {rev.movie_title} </h2>
      </li>
    </div>
    `;
  });
  {
  }
};

module.exports = viewRecommendations;
