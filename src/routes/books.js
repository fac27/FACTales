const { insertBook } = require(`../model/books.js`);
const { sanitise } = require('../model/sanitise.js');
module.exports = { post };

function post(req, res) {
  const { user, book, author } = req.query;
  console.log(user, book, author);
  insertBook(sanitise(user), sanitise(book), sanitise(author));
  res.redirect(`/`);
}
