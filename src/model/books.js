const db = require('../database/db.js');

module.exports = { selectBooks, insertBook };

const select_books = db.prepare(/*sql*/ `
  SELECT book, author FROM books WHERE book = ?
`);

const select_specific_book = db.prepare(/*sql*/ `
  SELECT book, author FROM books WHERE book = ?
`);

const create_book = db.prepare(/*sql*/ `
  INSERT INTO books (book, author) VALUES (?, ?)
`);

function selectBooks(book) {
  return select_books.all(book);
}

function insertBook(book, author) {
  const specific = select_specific_book.get(book);
  console.log(specific);
  if (specific) return specific.book_id;
  const element = create_book.run(book, author);
  console.log(element);
  return;
}
