const { selectBook, insertBook } = require(`../model/books.js`);

modules.exports = { post };

function post(req, res) {
  const { book, author } = req.body;
  insertBook(book, author);
  res.redirect(`/`);
}
