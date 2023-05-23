function movieInputFormTemplate(userNames) {
  return /*html*/ `
  <form method='POST'>
    <input type="text" placeholder="Enter the movie title"/>
    <input type="text" placeholder="Enter the director's name"/>
    <button id="submit-button" type="submit">Submit</button>
  </form>
  `;
}

 // ${userNames.map((user) => `<option>${user}</option>`).join("")}

function bookInputFormTemplate(userNames) {
  return /*html*/ `
  <form method='POST'>
    <input type="text" placeholder="Enter the book title"/>
    <input type="text" placeholder="Enter the author's name"/>
    <button id="submit-button" type="submit">Submit</button>
  </form>
  `;
}

   // ${userNames.map((user) => `<option>${user}</option>`).join("")}

module.exports = { movieInputFormTemplate, bookInputFormTemplate };
