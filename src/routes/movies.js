const { insertMovie } = require(`../model/movies.js`);
const { layoutTemplate } = require('../templates/layout.js');
module.exports = { post, get };

function post(req, res) {
  const { user, movie, director } = req.body;
  insertMovie(user, movie, director);
  res.redirect(`/`);
}

function get(req, res) {
  res.send(layoutTemplate('homePage'));
}
