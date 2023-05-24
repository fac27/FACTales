const filterRecommendations =
/*html*/ `
  <form method='POST' action="/" class="text-center filter-recs">
    <select name='filterRecBody'>
      <option value='movie'>Movies</option>
      <option value='book'>Books<option>
    </select>
    <button id="select-button" type="submit">Search</button>
  </form>
  `;


module.exports =  filterRecommendations;
