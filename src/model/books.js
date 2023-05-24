const db = require('../database/db.js');
const { selectUser } = require('./users.js');

module.exports = { insertBook, selectBookRecs };

const select_book = db.prepare(/*sql*/ `
  SELECT book_id FROM books WHERE book_title = ? AND author = ?
`);

const insert_book = db.prepare(/*sql*/ `
  INSERT INTO books (book_title, author) VALUES (?, ?) RETURNING book_id
`);

const insert_book_recommendation = db.prepare(/*sql*/ `
  INSERT INTO book_recommendations (user_id, book_id) VALUES (?, ?)
`);

function insertBook(user, book, author) {
  const user_id = selectUser(user);
  let book_id = select_book.get(book, author);
  if (book_id === undefined) {
    console.log(user_id, 'creating book');
    book_id = insert_book.get(book, author);
  }
  insert_book_recommendation.run(user_id, book_id.book_id);
}

// book recs

const select_book_recs = db.prepare(/*sql*/ `
SELECT 
  users.user_name,
  books.book_title
FROM users
JOIN book_recommendations ON users.user_id = book_recommendations.user_id
JOIN books ON book_recommendations.book_id = books.book_id
`);

function selectBookRecs() {
  return select_book_recs.all();
};


