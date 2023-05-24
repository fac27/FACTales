const { readFileSync } = require("node:fs");
const path = require("path");
const Database = require("better-sqlite3");

const dbFilePath = path.join(__dirname, "db.sqlite");
const db = new Database(dbFilePath);

const schemaFilePath = path.join(__dirname, "schema.sql");
const schema = readFileSync(schemaFilePath, "utf-8");
db.exec(schema);

module.exports = db;