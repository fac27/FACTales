function sanitise(unsafeData) {
  const unsafeCharactersObject = {
    '<': '&lt;',
    '>': '&gt;',
  };

  return unsafeData.replace(
    /<|>/gi,
    (matched) => unsafeCharactersObject[matched]
  );
}

module.exports = { sanitise };
