const { selectMovie, insertMovie } = require(`../model/books.js`);

module.exports = { post };

function post(req, res) {
  const { user, movie, director } = req.query;
  console.log(user);
  insertMovie(user, movie, director);
  res.redirect(`/`);
}
