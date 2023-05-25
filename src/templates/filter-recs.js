const { filterRec } = require('../templates/view-recs.js');

module.exports = filterRecommendations;

const filterRecommendations = /*html*/ `
<form method='POST' action="/" class="text-center filter-recs">
<select class="top-l" name='filterRecBody'>
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
