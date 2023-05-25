const { filterRec } = require('../templates/view-recs.js');

module.exports = filterRecommendations;

const filterRecommendations = /*html*/ `
  <form method='POST' action="/" class="text-center b-filter-recs">
    <select class="top-l" name='filterRecBody'>
      <option disabled selected value></option>
      <option value='movie'>Movies</option>
      <option value='book'>Books<option>
    </select>
    <button type="submit">Search</button>
  </form>
  `;

module.exports = filterRecommendations;
