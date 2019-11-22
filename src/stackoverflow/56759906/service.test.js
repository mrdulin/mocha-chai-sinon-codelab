const { expect } = require("chai");
const sinon = require("sinon");
const service = require("./service");

describe("56759906", () => {
  it("Should return error.", async function() {
    const stub = sinon.stub(service, "functionB").returns("functionC");
    const actual = await service.functionA();
    expect(actual).to.be.equal("functionC");
    expect(stub.calledOnce).to.be.true;
  });
});
