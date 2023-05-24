const { readFileSync } = require("node:fs");
const path = require("path");
const Database = require("better-sqlite3");

const rootDir = path.join(__dirname, "../..");
const dbFilePath = path.join(rootDir, process.env.DB_FILE);
const db = new Database(dbFilePath);

const schemaFilePath = path.join(rootDir, "src", "database", "schema.sql");
const schema = readFileSync(schemaFilePath, "utf-8");
db.exec(schema);

module.exports = db;
