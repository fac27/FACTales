const { readFileSync } = require("node:fs");
const db = require("./db.js");

const seed = readFileSync('src/database/seed.sql', "utf-8");
db.exec(seed);

console.log("DB seeded with example data");