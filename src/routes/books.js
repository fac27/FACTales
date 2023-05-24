const { insertBook } = require(`../model/books.js`);
const { sanitise } = require('../model/sanitise.js');
module.exports = { post };

function post(req, res) {
  const { user, book, author } = req.query;
  insertBook(sanitise(user), sanitise(book), sanitise(author));
  res.redirect(`/`);
}
