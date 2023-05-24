const { selectMovie, insertMovie } = require(`../model/books.js`);
// const { selectMovieRecs } = require("../model/movie-recs.js");
const viewRecommendations = require("../templates/view-recs.js");
const {layoutTemplate} = require("../templates/layout.js");
module.exports = { post, get };

function post(req, res) {
  const { user, movie, director } = req.query;
  console.log(user);
  insertMovie(user, movie, director);
  res.redirect(`/`);
}

function get(rq, res) {
  // const recsList = layoutTemplate('homePage');
  res.send(layoutTemplate('homePage'));
}
