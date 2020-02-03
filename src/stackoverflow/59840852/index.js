const $ = require("jquery");

$(document).ready(function() {
  checkIfLoginTracked();
});

function checkIfLoginTracked() {
  if (localStorage.getItem("loginHasBeenTracked") === null) {
    localStorage.setItem("loginHasBeenTracked", true);
  }
}
