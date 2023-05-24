const test = require("node:test");

const { testInsert } = require("./test-insert.js");

// add a movie recommendation
test("insertMovie adds a new movie recommendation to the database", testInsert);
