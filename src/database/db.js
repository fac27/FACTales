const { readFileSync } = require("node:fs");
const Database = require("better-sqlite3");

const db = new Database(process.env.DB_FILE);

const schema = readFileSync('src/database/schema.sql', "utf-8");
db.exec(schema);

module.exports = db;