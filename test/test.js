const test = require("node:test");
const { assert } = require("node:assert");

const model = require("../model/routes.js"); // review file name in path
const db = require("../src/database/db.js");
const { reset } = require("./test-helper_functions.js");

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