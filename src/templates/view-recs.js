const { selectMovieRecs } = require("../model/movie-recs.js");

function viewRecommendations() {
  let recs = selectMovieRecs();
  console.log(recs);
  // if (type === 'movie') method = selectMovieRecs();
  const recList = recs
    .map(
      (rec, index) => /*HTML*/ `
      <li style="list-style: none; grid-column: ${index % 3 + 1}; grid-row: ${Math.floor(index / 3) + 1};">
        ${rec.user_name} recommended ${rec.movie_title}
      </li>
    `
    )
    .join("");

  return /*html*/ `
  <section class="grid top-l">
    
    ${recList}
    
  </section>
  `;
}

module.exports = viewRecommendations;
