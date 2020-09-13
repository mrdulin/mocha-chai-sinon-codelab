import { verifyToken } from ".";
import sinon from "sinon";
import jwt from "jsonwebtoken";
import { expect } from "chai";

const sandbox = sinon.createSandbox();

describe("63795862", () => {
  afterEach(() => {
    sandbox.restore();
  });
  it("should return next and inject user id into the request", async () => {
    const req = { userId: "", headers: { authorization: "Bearer 1234577920fsdaf" } };
    const res = {};
    const next = sandbox.stub();

    const verifyStub = sandbox.stub(jwt, "verify").callsFake((token, secretOrPublicKey, callback: any) => {
      callback(null, { id: "bj435çsfkj" });
    });

    await verifyToken(req, res, next);
    sandbox.assert.calledWithExactly(verifyStub, "1234577920fsdaf", "", sinon.match.func);
    expect(req.userId).to.equal("bj435çsfkj");
    expect(next.calledOnce).to.be.true;
  });

  it("should return 401 status error", async () => {
    const req = { userId: "", headers: { authorization: "Bearer 1234577920fsdaf" } };
    const res = { status: sandbox.stub().returnsThis(), json: sandbox.stub() };
    const next = sandbox.stub();
    const mError = new Error("invalid token");
    sandbox.stub(jwt, "verify").callsFake((token, secretOrPublicKey, callback: any) => {
      callback(mError);
    });

    await verifyToken(req, res, next);

    expect(req.userId).to.equal("");
    sinon.assert.calledWithExactly(res.status, 401);
    sinon.assert.calledWithExactly(res.json, { message: "Invalid token." });
  });
});
