const test = require("node:test");

const { testInserts } = require("./test-insert.js");
const {testSelects} = require('./test-insert.js');
const {testViewRecs} = require('./test-insert.js');

// add a movie recommendation
test("insertMovie adds a new movie recommendation to the database", testInserts);
test("select queries return data from the database", testSelects);
test("viewRecommendations() lists all recommendations into the home page", testViewRecs);