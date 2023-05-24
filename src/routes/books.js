const { selectBook, insertBook } = require(`../model/books.js`);

module.exports = { post };

function post(req, res) {
  const { user, book, author } = req.query;
  console.log(user);
  insertBook(user, book, author);
  res.redirect(`/`);
}
