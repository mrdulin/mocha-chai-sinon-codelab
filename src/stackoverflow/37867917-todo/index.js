const $ = require("./jquery");

function TestApp() {}

TestApp.prototype.initialize = function() {
  $.get("https://github.com/mrdulin");
};

module.exports = TestApp;
