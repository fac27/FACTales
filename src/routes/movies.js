const { insertMovie } = require(`../model/books.js`);
const { layoutTemplate } = require("../templates/layout.js");
module.exports = { post, get };

function post(req, res) {
  const { user, movie, director } = req.query;
  insertMovie(user, movie, director);
  res.redirect(`/`);
}

function get(rq, res) {
  res.send(layoutTemplate("homePage"));
}
