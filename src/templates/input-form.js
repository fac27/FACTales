const { selectUserNames } = require('../model/users.js');

const userNamesObj = selectUserNames();
const userNamesArr = userNamesObj.map((obj) => obj.user_name);

function movieInputFormTemplate() {
  return /*html*/ `
  <form method='POST' action="/movie" class="flex-col b-input-form center-horizontal center-flex">
  <select name="user">${userNamesArr
    .map((user) => `<option>${user}</option>`)
    .join('')}</select>
    <input type="text" name="movie" placeholder="Enter the movie title"/>
    <input type="text" name="director" placeholder="Enter the director's name"/>
    <button id="submit-button" type="submit">Submit</button>
  </form>
  `;
}

function bookInputFormTemplate() {
  return /*html*/ `
  <form method='POST'  action="/book" class="flex-col b-input-form center-horizontal center-flex">
  <select name="user">${userNamesArr
    .map((user) => `<option>${user}</option>`)
    .join('')}</select>
    <input type="text" name="book" placeholder="Enter the book title"/>
    <input type="text" name="author" placeholder="Enter the author's name"/>
    <button id="submit-button" type="submit">Submit</button>
  </form>
  `;
}

// ${userNames.map((user) => `<option>${user}</option>`).join("")}

module.exports = { movieInputFormTemplate, bookInputFormTemplate };
