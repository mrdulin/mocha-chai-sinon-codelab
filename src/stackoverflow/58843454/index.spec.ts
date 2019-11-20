import * as mod from "./";
import sinon from "sinon";
import { expect } from "chai";

describe("58843454", () => {
  it("should pass", async () => {
    const clock = sinon.useFakeTimers();
    const testASpy = sinon.spy(mod, "testA");
    await testASpy();
    expect(testASpy.calledOnce).to.be.true;
    clock.tick(1000);
    expect(testASpy.calledTwice).to.be.true;
  });
});
