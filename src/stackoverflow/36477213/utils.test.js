const proxyquire = require("proxyquire");
const sinon = require("sinon");

describe("36477213", () => {
  afterEach(() => {
    sinon.restore();
  });
  it("should pass", () => {
    const logSpy = sinon.spy(console, "log");
    const files = ["a", "b"];
    const globStub = sinon.stub().yields(null, files);
    const utils = proxyquire("./utils.js", {
      glob: globStub,
    });
    const callback = sinon.stub();
    utils.funToTest("some message", callback);
    sinon.assert.calledWith(globStub, "*md", { cwd: "files/" }, sinon.match.func);
    sinon.assert.calledTwice(callback);
    sinon.assert.calledWith(logSpy.firstCall, "some message");
    sinon.assert.calledWith(logSpy.secondCall, files);
  });
});
