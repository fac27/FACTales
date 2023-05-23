const db = require('../database/db.js');

module.exports = { listBooks };

const select_books = db.prepare(/*sql*/ `
  SELECT book, author FROM books WHERE book = ?
`);

function listBooks(book) {
  return select_books.all(book);
}
