const sinon = require("sinon");
const proxyquire = require("proxyquire");
const chai = require("chai");

describe("sample test with testFunction() ", () => {
  let stubCache;
  let stub;
  let getCacheStub;
  before(() => {
    const sandbox = sinon.createSandbox();
    getCacheStub = sandbox.stub();
    stubCache = sandbox.stub().callsFake(() => {
      return {
        get: getCacheStub,
      };
    });
    getCacheStub.withArgs("cacheName1").returns("sample string");
    getCacheStub.withArgs("cacheName2").returns([1, 2, 3, 4, 5, 6]);
    stub = proxyquire("./", {
      "node-cache": stubCache,
    });
  });

  it("should not throw error", () => {
    const logSpy = sinon.spy(console, "log");
    chai.expect(stub.testFunction()).not.to.throw;
    sinon.assert.calledWith(logSpy.firstCall, "myStringCache:", "sample string");
    sinon.assert.calledWith(logSpy.secondCall, "myArrayCache:", [1, 2, 3, 4, 5, 6]);
  });
});
