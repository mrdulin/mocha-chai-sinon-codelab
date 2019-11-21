const sinon = require("sinon");
const proxyquire = require("proxyquire");

describe("report-exporter", () => {
  describe("generateReport", () => {
    afterEach(() => {
      sinon.restore();
    });
    const fakeError = new Error("Undefined is not a function");
    fakeError.httpCode = 500;

    it("Should return an error response", () => {
      const logSpy = sinon.spy(console, "log");
      const mReq = { body: {} };
      const mRes = { send: sinon.stub().returnsThis(), json: sinon.stub() };
      const convertStub = sinon.stub();
      const errorHandlerStub = sinon.stub().returns(fakeError);
      const transformRequestStub = sinon.stub().returns(mReq.body);
      const generate = proxyquire("./", {
        "./convert": convertStub,
        "./error-handler": errorHandlerStub,
        "./request-converter": transformRequestStub
      });

      generate.generateReport(mReq, mRes);
      convertStub.yield(fakeError, null);
      sinon.assert.calledWith(transformRequestStub);
      sinon.assert.calledWith(convertStub, {}, sinon.match.func);
      sinon.assert.calledWith(errorHandlerStub, fakeError);
      sinon.assert.calledWith(logSpy.firstCall, "HELLO");
      sinon.assert.calledWith(logSpy.secondCall, "BYE");
    });
  });
});
