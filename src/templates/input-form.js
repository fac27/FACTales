function movieInputFormTemplate(userNames) {
  return /*html*/ `
  <form method='POST'>
    <select>
      ${userNames.map((user) => `<option>${user}</option>`).join("")}
    </select>
    <input type="text" placeholder="Enter the movie title"></input>
    <input type="text" placeholder="Enter the director's name"></input>
    <button id="submit-button" type="submit">Search<button>
  </form>
  `;
}

function bookInputFormTemplate(userNames) {
  return /*html*/ `
    <form method='POST'>
    <select>
      ${userNames.map((user) => `<option>${user}</option>`).join("")}
    </select>
    <input type="text" placeholder="Enter the book title"></input>
    <input type="text" placeholder="Enter the author's name"></input>
    <button id="submit-button" type="submit">Search<button>
  </form>
  `;
}

module.exports = { movieInputFormTemplate, bookInputFormTemplate };
