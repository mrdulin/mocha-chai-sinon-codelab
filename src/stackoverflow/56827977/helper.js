const APICall = require("./request");

function Helper() {
  this.request = new APICall();
  this.pub_URL = "https://github.com";
}

Helper.prototype.getData = function(done) {
  const headers = {
    "content-type": "application/json",
  };
  this.request.get(this.pub_URL, headers, function(err, res, body) {
    if (!err && res.statusCode === 200) {
      console.log("Got data: ", body);
      done(null, body);
    } else {
      console.log("Error occured while fetching data: " + err);
      done(err, null);
    }
  });
};

module.exports = Helper;
