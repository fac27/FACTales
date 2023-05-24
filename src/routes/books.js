const { insertBook } = require(`../model/books.js`);

module.exports = { post };

function post(req, res) {
  const { user, book, author } = req.body;
  insertBook(user, book, author);
  res.redirect(`/`);
}
