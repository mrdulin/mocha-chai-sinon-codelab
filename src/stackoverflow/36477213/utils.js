const glob = require("glob");

module.exports = {
  funToTest: function(msg, callback) {
    console.log(msg);
    glob(
      "*md",
      {
        cwd: "files/",
      },
      function(err, files) {
        console.log(files);
      },
    );
    callback();
    callback();
  },
};
