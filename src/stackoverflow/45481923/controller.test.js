const { getAllRooms } = require("./controller");
const http = require("http");
const sinon = require("sinon");

describe("getAllRooms", () => {
  afterEach(() => {
    sinon.restore();
  });
  it("should send response", () => {
    const getStub = sinon.stub(http, "get");
    const sendStub = sinon.stub();
    const mReq = { params: { selector: "/a" } };
    const mRes = { send: sendStub };
    getAllRooms(mReq, mRes);
    const mBody = [{ group: "google" }, { group: "reddit" }];
    getStub.yield(null, {}, mBody);
    sinon.assert.calledWith(
      getStub,
      {
        method: "GET",
        url: "http://google.com/a",
        body: {}
      },
      sinon.match.func
    );
    sinon.assert.calledWith(sendStub, ["google"]);
  });

  it("should handle error", () => {
    const getStub = sinon.stub(http, "get");
    const sendStub = sinon.stub();
    const mReq = { params: { selector: "/a" } };
    const mRes = { send: sendStub };
    getAllRooms(mReq, mRes);
    const mError = new Error("network error");
    getStub.yield(mError, {}, null);
    sinon.assert.calledWith(
      getStub,
      {
        method: "GET",
        url: "http://google.com/a",
        body: {}
      },
      sinon.match.func
    );
    sinon.assert.notCalled(sendStub);
  });
});
