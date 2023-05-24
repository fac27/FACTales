const { insertBook } = require(`../model/books.js`);
const { sanitise } = require('../model/sanitise.js');
module.exports = { post };

function post(req, res) {
  const { user, book, author } = req.body;
  console.log('u', user, 'b', book, 'a', author);
  insertBook(sanitise(user), sanitise(book), sanitise(author));
  res.redirect(`/`);
}
