import * as testFooModule from "./foo";
import sinon from "sinon";
import { expect } from "chai";

describe("53980712", () => {
  it("Should be mocked but is not", () => {
    sinon.stub(testFooModule, "bar").returns(1);
    expect(testFooModule.bar()).to.be.equal(1);
  });
});
