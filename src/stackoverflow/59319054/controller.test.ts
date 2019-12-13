import { GetPartnerByPKController } from "./controller";
import { partnerDao } from "./AppFactory";
import sinon from "sinon";
import { expect } from "chai";
import ErrorResponse from "./ErrorResponse";

describe("GetPartnerByPKController", () => {
  afterEach(() => {
    sinon.restore();
  });
  it("should get parter by uuid correctly", async () => {
    const mResponse = "fake data";
    const getPartnerByUuidStub = sinon.stub(partnerDao, "getPartnerByUuid").resolves(mResponse);
    const mReq = { params: { uuid: "123" } };
    const mRes = { status: sinon.stub().returnsThis(), send: sinon.stub() };
    await GetPartnerByPKController(mReq, mRes);
    sinon.assert.calledWith(mRes.status, 200);
    sinon.assert.calledWith(mRes.status().send, mResponse);
    sinon.assert.calledWith(getPartnerByUuidStub, "123");
  });

  it("should 404", async () => {
    const mResponse = undefined;
    const getPartnerByUuidStub = sinon.stub(partnerDao, "getPartnerByUuid").resolves(mResponse);
    const mReq = { params: { uuid: "123" } };
    const mRes = { status: sinon.stub().returnsThis(), send: sinon.stub() };
    await GetPartnerByPKController(mReq, mRes);
    sinon.assert.calledWith(mRes.status, 404);
    sinon.assert.calledWith(
      mRes.status().send,
      new ErrorResponse("Partner not found", "404.1.100", "ERROR_LINK" + "404.1.100", []),
    );
    sinon.assert.calledWith(getPartnerByUuidStub, "123");
  });

  it("should 500", async () => {
    const mError = new Error("unknown error");
    const getPartnerByUuidStub = sinon.stub(partnerDao, "getPartnerByUuid").rejects(mError);
    const mReq = { params: { uuid: "123" } };
    const mRes = { status: sinon.stub().returnsThis(), send: sinon.stub() };
    await GetPartnerByPKController(mReq, mRes);
    sinon.assert.calledWith(mRes.status, 500);
    sinon.assert.calledWith(
      mRes.status().send,
      new ErrorResponse("Internal Server Error", "500.1.103", "ERROR_LINK" + "500.1.103", [
        JSON.stringify(mError.message),
      ]),
    );
    sinon.assert.calledWith(getPartnerByUuidStub, "123");
  });
});
