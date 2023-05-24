const { insertMovie } = require(`../model/movies.js`);
const { layoutTemplate } = require("../templates/layout.js");
const { sanitise } = require("../model/sanitise.js");
module.exports = { post, get };

function post(req, res) {
  const { user, movie, director } = req.body;
  insertMovie(sanitise(user), sanitise(movie), sanitise(director));
  res.redirect(`/`);
}

function get(req, res) {
  res.send(layoutTemplate("homePage"));
}
