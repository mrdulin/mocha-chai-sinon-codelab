const proxyquire = require("proxyquire");
const sinon = require("sinon");
const controller = require("./controller");

describe("verify", () => {
  let sandbox;
  before(() => {
    sandbox = sinon.createSandbox();
  });
  it("should verify correctly", () => {
    const logErrorStub = sandbox.stub();
    const logStub = sandbox.stub();
    logStub.error = logErrorStub;
    const loggerStub = sandbox.stub().callsFake(() => logStub);
    const { verify } = proxyquire("./", {
      "./logger": loggerStub,
    });
    const controllerVerifyStub = sandbox.stub(controller, "verify");
    const mReq = { query: { code: 123 } };
    const mRes = {};
    const mError = new Error("verify error");
    verify(mReq, mRes);
    controllerVerifyStub.yield(mError, null);
    sandbox.assert.calledWith(controllerVerifyStub, 123, sandbox.match.func);
    sandbox.assert.calledWith(loggerStub, mReq, sinon.match.string);
    sandbox.assert.calledWith(logStub, "Verifying query code.");
    sandbox.assert.calledWith(logErrorStub, mError, "There was an error.");
  });
});
