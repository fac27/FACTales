const db = require('../database/db.js');
const { selectUser } = require('./users.js');

module.exports = { insertBook };

const select_book = db.prepare(/*sql*/ `
  SELECT book_id FROM books WHERE book = ? AND author = ? LIMIT 1
`);

const create_book = db.prepare(/*sql*/ `
  INSERT INTO books (book, author) VALUES (?, ?) RETURNING book_id
`);

const create_book_recommendation = db.prepare(/*sql*/ `
  INSERT INTO book_recommendations (user_id, book_id) VALUES (?, ?)
`);

function insertBook(user, book, author) {
  let book_id = select_book.get(book, author);
  if (book_id === undefined) {
    console.log('creating book');
    book_id = create_book.get(book, author);
  }
  console.log(user);
  const user_id = selectUser(user);
  console.log('user_id', user_id);
  create_book_recommendation.run(user_id, book_id.book_id);
}
