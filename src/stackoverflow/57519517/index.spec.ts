import * as ref from "./";
import sinon from "sinon";
import { expect } from "chai";

describe("57519517", () => {
  let reloadStub;
  before(() => {
    reloadStub = sinon.stub(ref, "reloadPage");
  });

  it("should mock reload page", () => {
    const logSpy = sinon.spy(console, "log");
    ref.reloadPage();
    expect(reloadStub.calledOnce).to.be.true;
    expect(logSpy.notCalled).to.be.true;
  });
});
