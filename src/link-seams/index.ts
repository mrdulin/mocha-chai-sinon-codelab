const fs = require("fs");

function doesFileExist(path) {
  return fs.existsSync(path);
}

module.exports = doesFileExist;
