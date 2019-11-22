const request = require("request");

function func(arg1, arg2) {
  request.get("https://github.com/mrdulin", function(error, response, body) {
    console.log(arg1, arg2);
    if (error) {
      console.log(error);
    } else if (response.status === 200) {
      console.log(response);
    } else {
      console.log("others");
    }
  });
}

exports.func = func;
