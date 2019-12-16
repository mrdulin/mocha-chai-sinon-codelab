const Files = require("./files");
const sinon = require("sinon");

describe("Files", () => {
  it("should use stubbed dir", () => {
    sinon.spy(console, "log");
    const instance = new Files();
    instance.dir = "stubbed dir";
    instance.mkdir();
    sinon.assert.calledWith(console.log, "make dir: ", "stubbed dir");
  });
});
