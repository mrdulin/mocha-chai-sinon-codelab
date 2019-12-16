const Files = require("./files");
const sinon = require("sinon");
const fs = require("fs");

describe.skip("Files", () => {
  it("should use stubbed dir to mkdir", () => {
    sinon.stub(fs, "existsSync").returns(false);
    sinon.stub(fs, "mkdirSync");
    sinon.stub(Files.prototype, "dir").value("stubbed dir");
    console.log("stub dir");
    new Files();
    sinon.assert.calledWith(fs.existsSync, "stubbed dir");
    sinon.assert.calledWith(fs.mkdirSync, "stubbed dir");
  });
});
