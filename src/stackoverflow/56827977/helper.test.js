const APICall = require("./request");
const sinon = require("sinon");
const Helper = require("./helper");

describe("56827977", () => {
  afterEach(() => {
    sinon.restore();
  });
  it("should get data correctly", () => {
    const helper = new Helper();
    const mRes = { statusCode: 200 };
    const mBody = "fake data";
    sinon.stub(APICall.prototype, "get").yields(null, mRes, mBody);
    const callback = sinon.stub();
    helper.getData(callback);
    sinon.assert.calledWithExactly(
      APICall.prototype.get,
      "https://github.com",
      {
        "content-type": "application/json",
      },
      sinon.match.func,
    );
    sinon.assert.calledWithExactly(callback, null, "fake data");
  });

  it("should handle error", () => {
    const helper = new Helper();
    const mError = new Error("network error");
    sinon.stub(APICall.prototype, "get").yields(mError, null, null);
    const callback = sinon.stub();
    helper.getData(callback);
    sinon.assert.calledWithExactly(
      APICall.prototype.get,
      "https://github.com",
      {
        "content-type": "application/json",
      },
      sinon.match.func,
    );
    sinon.assert.calledWithExactly(callback, mError, null);
  });
});
