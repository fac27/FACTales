const { selectMovieRecs } = require('../model/movie-recs.js');
const { selectBookRecs } = require('../model/books.js');

let filterRec;

function setFilterRec(filterRecArg) {
  filterRec = filterRecArg;
}

function viewRecommendations() {
  // const recs = (filterRec === 'movie') ? selectMovieRecs() : selectBookRecs();
  let recList;
  console.log('filter method', filterRec);
  if (filterRec === 'movie') {
    recList = selectMovieRecs()
      .map(
        (rec, index) => /*HTML*/ `
      <li style="list-style: none; grid-column: ${(index % 3) + 1}; grid-row: ${
          Math.floor(index / 3) + 1
        };">
        ${rec.user_name} recommended ${rec.movie_title}
      </li>
    `
      )
      .join('');
  } else {
    recList = selectBookRecs()
      .map(
        (rec, index) => /*HTML*/ `
      <li style="list-style: none; grid-column: ${(index % 3) + 1}; grid-row: ${
          Math.floor(index / 3) + 1
        };">
        ${rec.user_name} recommended ${rec.book_title}
      </li>
    `
      )
      .join('');
  }

  return /*html*/ `
  <section class="grid top-xl rec-board">
    
    ${recList}
    
  </section>
  `;
}

module.exports = { viewRecommendations, setFilterRec };
