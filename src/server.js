const express = require('express');
const books = require('./routes/books.js');
const server = express();
server.use(express.static('public'));

server.post('/book', books.post);
server.get('/book/:id', books.get);

module.exports = server;
