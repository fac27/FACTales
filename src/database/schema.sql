-- PRAGMA foreign_keys = ON;
BEGIN;

CREATE TABLE IF NOT EXISTS users (
  user_id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS movies (
  movie_id INTEGER PRIMARY KEY AUTOINCREMENT,
  movie_title TEXT NOT NULL,
  director TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS books (
  book_id INTEGER PRIMARY KEY AUTOINCREMENT,
  book_title TEXT NOT NULL,
  author TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS movie_recommendations (
  movie_rec_id INTEGER PRIMARY KEY AUTOINCREMENT,
  movie_id INTEGER REFERENCES movies(movie_id),
  user_id INTEGER REFERENCES users(user_id)
);

CREATE TABLE IF NOT EXISTS book_recommendations (
  book_rec_id INTEGER PRIMARY KEY AUTOINCREMENT,
  book_id INTEGER REFERENCES books(book_id),
  user_id INTEGER REFERENCES users(user_id)
);

COMMIT;