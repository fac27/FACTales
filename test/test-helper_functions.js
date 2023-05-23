const db = require("../src/database/db.js");

// reset tables before each test
function reset() {
  db.exec(/*sql*/ `
  DELETE FROM 
    tasks,
    users,
    movies,
    books,
    user_recommendations
  `);
}

