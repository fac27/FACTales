function searchFormTemplate() {
  return /*html*/ `
  <form method='POST'>
    <select name='select'>
      <option value='user_name'></option>
      <option value='movie_name'></option>
      <option value='book_name'><option>
    </select>
    <button id="select-button" type="submit">Search<button>
  </form>
  `;
}

module.exports = { searchFormTemplate };
