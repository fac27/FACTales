const db = require('../database/db.js');

module.exports = { selectUser };

const select_user = db.prepare(/*sql*/ `
  SELECT user_id 
  FROM users WHERE user_name = ?
`);

function selectUser(user) {
  return select_user.get(user);
}
