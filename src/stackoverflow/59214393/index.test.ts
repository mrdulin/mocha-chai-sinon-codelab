import sinon from "sinon";
import { expect } from "chai";

describe("59214393", () => {
  it("should mock process.env", () => {
    process.env.NODE_ENV = "";
    const stub = sinon.stub(process.env, "NODE_ENV").value("prod");
    expect(process.env.NODE_ENV).to.be.eq("prod");
    stub.restore();
  });

  it("should back to original value", () => {
    expect(process.env.NODE_ENV).to.be.eq("");
  });
});
