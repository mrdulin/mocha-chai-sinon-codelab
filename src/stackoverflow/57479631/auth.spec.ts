import sinon from "sinon";
import proxyquire from "proxyquire";
import { expect } from "chai";

describe("auth", () => {
  describe("#refreshToken", () => {
    it("should take token from body", async () => {
      const mResponse = { another_token: "123", expires_in: "3600" };
      const requestPromiseStub = sinon.stub().resolves(mResponse);
      const auth = proxyquire("./auth", {
        "request-promise": requestPromiseStub,
      });
      const req = {
        body: {
          token: "123",
        },
      };
      const res = { end: sinon.stub() };
      await auth.refreshToken(req, res);
      expect(requestPromiseStub.calledWith({ method: "POST", url: "https://github.com/mrdulin" })).to.be.true;
      expect(
        res.end.calledWith(
          JSON.stringify({
            another_token: {
              token: mResponse.another_token,
            },
            expires_in: mResponse.expires_in,
          }),
        ),
      ).to.be.true;
    });

    it("should cause not authorized error", async () => {
      const mError = new Error("network error");
      const requestPromiseStub = sinon.stub().rejects(mError);
      const auth = proxyquire("./auth", {
        "request-promise": requestPromiseStub,
      });
      const errorLogSpy = sinon.spy(console, "error");
      const req = {
        body: {
          token: "123",
        },
      };
      const res = { status: sinon.stub().returnsThis(), end: sinon.stub() };
      await auth.refreshToken(req, res);
      expect(errorLogSpy.calledWith(mError)).to.be.true;
      expect(res.status.calledWith(400)).to.be.true;
      expect(res.status().end.calledWith("not authorized")).to.be.true;
    });
  });
});
