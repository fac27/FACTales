const filterRecommendations =
/*html*/ `
  <form method='POST' class="text-center filter-recs">
    <select name='select'>
      <option value='movie_name'>Movies</option>
      <option value='book_name'>Books<option>
    </select>
    <button id="select-button" type="submit">Search</button>
  </form>
  `;


module.exports =  filterRecommendations;
