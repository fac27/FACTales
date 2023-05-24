function sanitise(unsafeData) {
  let unsafeCharactersObject = {
    "<": "&lt;",
    ">": "&gt;",
  };

  return unsafeData.replace(/<|>/gi, (matched) => unsafeCharactersObject[matched]);
}

module.exports = { sanitise };
