const test = require('node:test');

const homePage = require('./home.test');

// TEST INSERT ////////////////////////
//////////////////////////////////////

// add user

// add a recommendation

// add a book

// add a movie

// TEST DELETE ////////////////////////
//////////////////////////////////////

// delete a recommendation

// TEST SELECT ///////////////////////
/////////////////////////////////////

// select a user and display all their recommendations

// select a director and display all their movies

// select a movie and display every user who recommended it

// select an author and display all their books

// select a book and display every user who recommended it

test(
  'select homepage gathers correct database data and displays in html',
  homePage
);
