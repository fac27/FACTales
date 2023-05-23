const express = require('express');
const books = require('./routes/books.js');
const movies = require('./routes/movies.js');

const server = express();
server.use(express.static('public'));

server.post('/book', books.post);
server.post('/movie', movies.post);

module.exports = server;
