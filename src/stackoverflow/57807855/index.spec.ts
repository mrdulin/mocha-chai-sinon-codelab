const mod = require("./");
import sinon from "sinon";
import { expect } from "chai";

describe("myFunction", () => {
  afterEach(() => {
    sinon.restore();
  });
  it("should send request", async () => {
    const mResponse = { status: 200 };
    const axiosStub = sinon.stub(mod, "axios").resolves(mResponse);
    const logSpy = sinon.spy(console, "log");
    await mod.myFunction();
    expect(
      axiosStub.calledWith({
        method: "POST",
        baseURL: "http://myawesome-site.com",
        url: "/api/path",
        headers: {
          "content-type": "application/json",
        },
        data: {
          example: "my data",
        },
      }),
    ).to.be.true;
    expect(logSpy.calledWith("do something")).to.be.true;
  });

  it("should handle request error", async () => {
    const mError = new Error("network error");
    const axiosStub = sinon.stub(mod, "axios").rejects(mError);
    const logSpy = sinon.spy(console, "log");
    await mod.myFunction();
    expect(
      axiosStub.calledWith({
        method: "POST",
        baseURL: "http://myawesome-site.com",
        url: "/api/path",
        headers: {
          "content-type": "application/json",
        },
        data: {
          example: "my data",
        },
      }),
    ).to.be.true;
    expect(logSpy.calledWith("do something else")).to.be.true;
  });
});
