const db = require('../database/db.js');

const select_user = db.prepare(/*sql*/ `
  SELECT user_id 
  FROM users WHERE user_name = ?
`);

function selectUser(user) {
  const user_id = select_user.get(user);
  return user_id.user_id;
}

const select_user_names = db.prepare(/*sql*/ `
  SELECT 
    user_name
  FROM users 
`);

function selectUserNames() {
  return select_user_names.all();
}

module.exports = { selectUser, selectUserNames };
