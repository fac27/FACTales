-- PRAGMA foreign_keys = ON;

BEGIN;

CREATE TABLE IF NOT EXISTS names (
  name_id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS movies (
  movie_id INTEGER PRIMARY KEY AUTOINCREMENT,
  movie TEXT NOT NULL,
  director TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS books (
  book_id INTEGER PRIMARY KEY AUTOINCREMENT,
  book TEXT NOT NULL,
  author TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS movie_recommendations (
  movie_rec_id INTEGER PRIMARY KEY AUTOINCREMENT,
  movie_id INTEGER REFERENCES movies(movie_id),
  name_id INTEGER REFERENCES names(name_id)
);

CREATE TABLE IF NOT EXISTS book_recommendations (
  book_rec_id INTEGER PRIMARY KEY AUTOINCREMENT,
  book_id INTEGER REFERENCES books(book_id),
  name_id INTEGER REFERENCES names(name_id)
);

COMMIT;



