import { expect } from "chai";
import { ensurePathFormat } from "./";
import sinon from "sinon";

describe("ensurePathFormat", () => {
  it("validates file path", () => {
    expect(() => ensurePathFormat("", true)).throws("Invalid or empty path provided");
  });

  it("should print the error", () => {
    const errorLogSpy = sinon.stub(console, "error");
    const processExitSpy = sinon.stub(process, "exit");
    ensurePathFormat("");
    sinon.assert.calledWithExactly(errorLogSpy, "Invalid or empty path provided");
    sinon.assert.calledWithExactly(processExitSpy, 1);
  });
});
