const { filterRec } = require('../templates/view-recs.js');

console.log(filterRec);

const filterRecommendations = /*html*/ `
  <form method='POST' action="/" class="text-center filter-recs">
    <select name='filterRecBody'>
      <option value='movie' ${
        filterRec == 'movie' ? ' selected ' : ''
      } >Movies</option>
      <option value='book' ${
        filterRec == 'book' ? ' selected ' : ''
      }>Books<option>
    </select>
    <button id="select-button" type="submit">Search</button>
  </form>
  `;

module.exports = filterRecommendations;
