import { replaceAssetFileName } from "./";
import sinon from "sinon";
import { expect } from "chai";
import * as util from "./utils/years";

describe("replaceAssetFileName", () => {
  afterEach(() => {
    sinon.restore();
  });
  it("We can replace file names", () => {
    const logSpy = sinon.spy(console, "log");
    const stub = sinon.stub(util, "getFinancialYears").callsFake(() => ["2019"]);
    expect(replaceAssetFileName()).to.be.true;
    expect(logSpy.calledWith(["2019"])).to.be.true;
    stub.restore();
  });
});
