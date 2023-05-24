const { insertBook } = require(`../model/books.js`);

module.exports = { post };

function post(req, res) {
  const { user, book, author } = req.query;
  insertBook(user, book, author);
  res.redirect(`/`);
}
