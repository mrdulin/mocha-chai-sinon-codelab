const myFunc = require("./myFunc");

function main() {
  return myFunc().then((res) => console.log(res));
}

module.exports = main;
