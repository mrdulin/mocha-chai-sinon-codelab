import proxyquire from "proxyquire";
import sinon from "sinon";
import { expect } from "chai";

describe("myFunc", () => {
  afterEach(() => {
    sinon.restore();
  });
  it("should mock prop() method", () => {
    const el = {};
    const propStub = sinon.stub().returnsThis();
    const jqueryStub = sinon.stub().callsFake(() => {
      return {
        prop: propStub,
      };
    });
    const { myFunc } = proxyquire("./", {
      jquery: jqueryStub,
    });
    myFunc(el);
    expect(jqueryStub.calledWith(el)).to.be.true;
    expect(propStub.calledWith("tagName")).to.be.true;
  });
});
