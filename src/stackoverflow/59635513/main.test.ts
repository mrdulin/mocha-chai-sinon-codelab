import { main } from "./main";
import sinon from "sinon";
import { expect } from "chai";

describe("59635513", () => {
  afterEach(() => {
    sinon.restore();
  });
  it("should pass", () => {
    const mDate = 1000 * 1000;
    const dateNowStub = sinon.stub(Date, "now").returns(mDate);
    const actual = main();
    expect(actual).to.be.eq(mDate);
    sinon.assert.calledOnce(dateNowStub);
  });
});
