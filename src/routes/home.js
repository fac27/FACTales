const { layoutTemplate } = require('../templates/layout');
const { layoutTemplate } = require('../templates/layout.js');

module.exports = { get };

function get(req, res) {
  res.send(layoutTemplate('homePage'));
}
