class Files {
  constructor(queueNumber = 0) {
    this.queueNumber = queueNumber;
    this.dir = "JiraResults";
  }

  mkdir() {
    console.log("make dir: ", this.dir);
  }
}

module.exports = Files;
