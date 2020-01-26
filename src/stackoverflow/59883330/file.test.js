const sinon = require("sinon");
const file = require("./file");

describe("59883330", () => {
  afterEach(() => {
    sinon.restore();
  });
  it("should do something", function() {
    global.confirm = sinon.stub().returns(true);
    sinon.stub(console, "log");
    file.writeTOFile("fghsssbn", "5647");
    sinon.assert.calledWithExactly(global.confirm, "You are uploading a file . Do you want to continue?");
    sinon.assert.calledWithExactly(console.log, "do something");
  });

  it("should do another thing", () => {
    global.confirm = sinon.stub().returns(false);
    sinon.stub(console, "log");
    file.writeTOFile("fghsssbn", "5647");
    sinon.assert.calledWithExactly(global.confirm, "You are uploading a file . Do you want to continue?");
    sinon.assert.calledWithExactly(console.log, "do another thing");
  });
});
