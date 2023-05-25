const { insertMovie } = require(`../model/movies.js`);
const { sanitise } = require('../model/sanitise.js');
module.exports = { post };

function post(req, res) {
  const { user, movie, director } = req.body;
  console.log(user, movie, director);
  insertMovie(sanitise(user), sanitise(movie), sanitise(director));
  res.redirect(`/`);
}
