const $ = require("./jquery");
const sinon = require("sinon");
const TestApp = require(".");

describe("TestApp", () => {
  it("should initialize", () => {
    const getStub = sinon.stub($, "get");
    const test = new TestApp();
    test.initialize();
    sinon.assert.calledWith(getStub, "https://github.com/mrdulin");
  });
});
