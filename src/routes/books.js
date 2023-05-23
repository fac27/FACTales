const { selectBooks, insertBook } = require(`../model/books.js`);

function post(req, res) {
  const { book, author } = req.body;
  const book_id = insertBook(book, author);
  res.redirect(`/book/${book_id}`);
}
