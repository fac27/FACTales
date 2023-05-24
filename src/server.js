const express = require('express');
const server = express();
// const { layoutTemplate } = require('./templates/layout.js');
server.use(express.static('public'));


const books = require('./routes/books.js');
const movies = require('./routes/movies.js');

server.post('/book', books.post);
server.post('/movie', movies.post);
server.get('/', movies.get);


module.exports = server;
