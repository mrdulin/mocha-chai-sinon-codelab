const foo = require("./");
const sinon = require("sinon");
const request = require("request");

describe("func", () => {
  afterEach(() => {
    sinon.restore();
  });
  it("should handle error", () => {
    const logSpy = sinon.spy(console, "log");
    const getStub = sinon.stub(request, "get");
    foo.func(1, 2);
    const mError = new Error("network error");
    getStub.yield(mError, null, null);
    sinon.assert.calledWith(getStub, "https://github.com/mrdulin", sinon.match.func);
    sinon.assert.calledWith(logSpy.firstCall, 1, 2);
    sinon.assert.calledWith(logSpy.secondCall, mError);
  });

  it("should handle response", () => {
    const logSpy = sinon.spy(console, "log");
    const getStub = sinon.stub(request, "get");
    foo.func(1, 2);
    const mResponse = { status: 200 };
    getStub.yield(null, mResponse, null);
    sinon.assert.calledWith(getStub, "https://github.com/mrdulin", sinon.match.func);
    sinon.assert.calledWith(logSpy.firstCall, 1, 2);
    sinon.assert.calledWith(logSpy.secondCall, mResponse);
  });

  it("should handle other situation", () => {
    const logSpy = sinon.spy(console, "log");
    const getStub = sinon.stub(request, "get");
    foo.func(1, 2);
    const mResponse = { status: 500 };
    getStub.yield(null, mResponse, null);
    sinon.assert.calledWith(getStub, "https://github.com/mrdulin", sinon.match.func);
    sinon.assert.calledWith(logSpy.firstCall, 1, 2);
    sinon.assert.calledWith(logSpy.secondCall, "others");
  });
});
