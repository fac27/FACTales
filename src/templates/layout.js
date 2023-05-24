const homeHeader  = require("./home-header.js");
const filterRecommendations  = require("./filter-recs.js");
const viewRecommendations = require("./view-recs.js");
const formPageHeader = require("./formPage-header.js");
const { movieInputFormTemplate }= require("./input-form.js");
const { bookInputFormTemplate } = require("./input-form.js");


function layoutTemplate(title) {
  return /*html*/ `
  <html lang = "en">
    <head>
      <link rel="stylesheet" href="/styles.css">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${title}</title>
    </head>
    <body>
    ${homeHeader}
    ${filterRecommendations}
    ${viewRecommendations}
    ${formPageHeader}
    ${movieInputFormTemplate()}
    ${bookInputFormTemplate()}
    </body>
  </html>
  `;
}


module.exports = { layoutTemplate };
