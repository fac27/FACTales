const express = require("express");
const server = express();
const { layoutTemplate } = require("./templates/layout.js");
server.use(express.static("public"));

// get "/"
server.get("/", (req, res) => {
  const title = "FACTales";
  res.send(layoutTemplate(title));
});

module.exports = server;
