const express = require("express");
const server = express();
const { layoutTemplate } = require("./templates/layout.js");
server.use(express.static("public"));
const bodyParser = express.urlencoded({ extended: true });

// get "/"
server.get("/", (req, res) => {
  const title = "FACTales";
  res.send(layoutTemplate(title));
});


const books = require('./routes/books.js');
const movies = require('./routes/movies.js');



server.post('/book', books.post);
server.post('/movie', bodyParser, movies.post);


module.exports = server;
