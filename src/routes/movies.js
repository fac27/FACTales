const { insertMovie } = require(`../model/movies.js`);

module.exports = { post, get };

function post(req, res) {
  const { user, movie, director } = req.body;
  insertMovie(user, movie, director);
  res.redirect(`/`);
}
