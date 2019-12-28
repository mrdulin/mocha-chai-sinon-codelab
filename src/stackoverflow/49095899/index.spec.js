const sinon = require("sinon");
const proxyquire = require("proxyquire");

describe("49095899", () => {
  afterEach(() => {
    sinon.restore();
  });
  describe("#addUser", () => {
    it("should save user correctly", () => {
      const dbStub = { save: sinon.stub().yields(null) };
      const handlers = proxyquire("./", {
        "./db-factory.js": sinon.stub().returns(dbStub),
      });
      const mReq = { body: { name: "a", age: 25, deviceID: "1" } };
      const mRes = { status: sinon.stub(), sendStatus: sinon.stub() };
      handlers.addUser(mReq, mRes);
      sinon.assert.calledWith(dbStub.save, mReq.body, sinon.match.func);
      sinon.assert.calledWith(mRes.sendStatus, 201);
    });

    it("should send status 500 if save user failed", () => {
      const mError = new Error("save user error");
      const dbStub = { save: sinon.stub().yields(mError) };
      const handlers = proxyquire("./", {
        "./db-factory.js": sinon.stub().returns(dbStub),
      });
      const mReq = { body: { name: "a", age: 25, deviceID: "1" } };
      const mRes = { status: sinon.stub(), sendStatus: sinon.stub() };
      handlers.addUser(mReq, mRes);
      sinon.assert.calledWith(dbStub.save, mReq.body, sinon.match.func);
      sinon.assert.calledWith(mRes.sendStatus, 500);
    });

    it("should send status 400 if deviceId is missing", () => {
      const handlers = require("./");
      const mReq = { body: { name: "a", age: 25 } };
      const mRes = { status: sinon.stub().returnsThis(), json: sinon.stub() };
      handlers.addUser(mReq, mRes);
      sinon.assert.calledWith(mRes.status, 400);
      sinon.assert.calledWith(mRes.json, { error: "deviceID is missing" });
    });
  });
});
