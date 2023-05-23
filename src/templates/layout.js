const formTemplate = require("./search-form.js");
const homeHeader = require("./header-1.js")

function layoutTemplate(title, content) {
  return /*html*/ `
  <html lang = "en">
    <head>
      <link rel="stylesheet" href="/styles.css">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${title}</title>
    </head>
    <body>
      ${formTemplate}
      ${content}
    </body>
  </html>
  `;
}

module.exports = { layoutTemplate };
