const { insertBook } = require(`../model/books.js`);

module.exports = { post };

function post(req, res) {
  const { user, book, author } = req.body;
  console.log('posting book');
  console.log(user, book, author);
  insertBook(user, book, author);
  res.redirect(`/`);
}
