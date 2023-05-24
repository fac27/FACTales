const express = require('express');
const server = express();

server.use(express.static('public'));
const bodyParser = express.urlencoded({ extended: true });

const books = require('./routes/books.js');
const movies = require('./routes/movies.js');
const home = require('./routes/home.js');

server.post('/book', bodyParser, books.post);
server.post('/movie', bodyParser, movies.post);
server.get('/', home.get);

module.exports = server;
