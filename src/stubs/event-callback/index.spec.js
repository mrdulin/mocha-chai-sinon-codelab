const main = require(".");
const EventEmitter = require("events");
const sinon = require("sinon");

describe("stub - event callback", () => {
  afterEach(() => {
    sinon.restore();
  });
  it("should pass", () => {
    const logSpy = sinon.spy(console, "log");
    const onStub = sinon.stub(EventEmitter.prototype, "on");
    const onEndStub = onStub
      .withArgs("end")
      .yields()
      .returnsThis();
    const onMessageStub = onStub
      .withArgs("message")
      .yields("sinon")
      .returnsThis();

    main();
    sinon.assert.calledWith(onMessageStub, "message", sinon.match.func);
    sinon.assert.calledWith(onEndStub, "end", sinon.match.func);
    sinon.assert.calledWith(logSpy.firstCall, "payload: ", "sinon");
    sinon.assert.calledWith(logSpy.secondCall, "data: ", "sinon");
  });
});
