const mod = require("./");
const sinon = require("sinon");
const { expect } = require("chai");

describe("53605161", () => {
  it("should stub getAuthenticationInfo correctly", () => {
    const stub = sinon.stub(mod, "getAuthenticationInfo").returns("mocked-response");
    const actual = mod.getAuthToken(1);
    expect(actual).to.be.equal("mocked-response");
    expect(stub.calledWith(1)).to.be.true;
    stub.restore();
  });

  it("getAuthenticationInfo", () => {
    const actual = mod.getAuthenticationInfo();
    expect(actual).to.be.equal("TEST");
  });
});
