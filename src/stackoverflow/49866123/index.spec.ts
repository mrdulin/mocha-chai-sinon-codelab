import { main } from "./";
import sinon from "sinon";
import { expect } from "chai";

describe("49866123", () => {
  afterEach(() => {
    sinon.restore();
  });
  it("should log 'haha'", () => {
    const a = 1;
    const logSpy = sinon.spy(console, "log");
    const toStringSpy = sinon.stub(Number.prototype, "toString").returns("aa");
    main(a);
    expect(toStringSpy.calledWith(2)).to.be.true;
    expect(logSpy.calledWith("haha")).to.be.true;
  });
  it("should do nothing", () => {
    const a = 1;
    const logSpy = sinon.spy(console, "log");
    const toStringSpy = sinon.stub(Number.prototype, "toString").returns("a");
    main(a);
    expect(toStringSpy.calledWith(2)).to.be.true;
    expect(logSpy.notCalled).to.be.true;
  });
});
