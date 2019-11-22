const { expect } = require("chai");
const sinon = require("sinon");
const a = require("./a");
const { funcB } = require("./funcB");

describe("57796168", () => {
  let sandbox;
  before(() => {
    sandbox = sinon.createSandbox();
  });
  it("should call a.funcA", () => {
    const funcAStub = sandbox.stub(a, "funcA");
    funcB();
    sinon.assert.calledWith(funcAStub, { arg: 123 });
    expect(funcAStub.callCount).to.be.equal(1);
    expect(funcAStub.calledWith({ arg: 123 })).to.be.true;
  });
});
