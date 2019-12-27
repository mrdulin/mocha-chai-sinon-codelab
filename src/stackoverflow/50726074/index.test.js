const { getMyThings } = require("./");
const sinon = require("sinon");
const { expect } = require("chai");
const MyClass = require("./api");

describe("50726074", () => {
  afterEach(() => {
    sinon.restore();
  });
  it("should pass", async () => {
    const getStub = sinon.stub(MyClass.prototype, "get").resolves("fake data");
    const mReq = { route: "/api/thing", query: { id: "1" } };
    const actual = await getMyThings(mReq);
    expect(actual).to.be.equal("fake data");
    sinon.assert.calledWith(getStub, "/api/thing", { qs: { id: "1" } });
  });
});
