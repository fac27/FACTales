const { layoutTemplate } = require('../templates/layout');

module.exports = { get };

function get(req, res) {
  res.send(layoutTemplate('homePage'));
}
