const { selectMovie, insertMovie } = require(`../model/movies.js`);



function post(req, res) {
  const { user, movie, director } = req.body;
  insertMovie(user, movie, director);
  res.redirect(`/`);
}

module.exports = { post };