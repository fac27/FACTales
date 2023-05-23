const db = require('../database/db.js');

module.exports = { selectUser };

const select_user = db.prepare(/*sql*/ `
  SELECT user_id 
  FROM users WHERE user_name = ?
`);

function selectUser(user) {
  const user_id = select_user.get(user);
  console.log('user_id', user_id);
  //   return user_id.user_id;
  return user_id;
}
