const fs = require("fs");

class Files {
  constructor(queueNumber = 0) {
    this.queueNumber = queueNumber;
    console.log("before: ", this.dir);
    this.dir = "JiraResults";
    console.log("after: ", this.dir);
    if (!fs.existsSync(this.dir)) {
      fs.mkdirSync(this.dir);
    }
  }
}

Files.prototype.dir = "";

module.exports = Files;
