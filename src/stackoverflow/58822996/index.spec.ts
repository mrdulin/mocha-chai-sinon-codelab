import { myRequest } from ".";
import chai from "chai";
import sinon from "sinon";
import chaiAsPromised from "chai-as-promised";
import request from "request";
chai.use(chaiAsPromised);

const { expect } = chai;

describe("myRequest", () => {
  it("should request success", async (done) => {
    // @ts-ignore
    const stub = sinon.stub(request, "post").callsFake((uri, options, callback) => {
      const mResponse = { statusCode: 200 };
      const mBody = { transferId: 1 };
      callback(null, mResponse, mBody);
      done();
    });
    const actualValue = await myRequest("url", {});
    // @ts-ignore
    stub.calledOnceWith("url", { json: {} });
    expect(actualValue).to.eq(1);
    stub.restore();
  });

  it("should throw error use request error", async (done) => {
    const mError = new Error("Internal server error");
    const mResponse = { statusCode: 500 };
    // @ts-ignore
    const stub = sinon.stub(request, "post").callsFake((uri, options, callback) => {
      callback(mError, mResponse, null);
      done();
    });
    await expect(myRequest("url", {})).to.be.rejectedWith(mError);
    // @ts-ignore
    stub.calledOnceWith("url", { json: {} });
    stub.restore();
  });

  it("should throw error use body.description as error message", async (done) => {
    const mResponse = { statusCode: 500 };
    const mBody = { description: "some error" };
    // @ts-ignore
    const stub = sinon.stub(request, "post").callsFake((uri, options, callback) => {
      callback(null, mResponse, mBody);
      done();
    });
    await expect(myRequest("url", {})).to.be.rejectedWith(mBody.description);
    // @ts-ignore
    stub.calledOnceWith("url", { json: {} });
    stub.restore();
  });

  it("should throw error use body as error message", async (done) => {
    const mResponse = { statusCode: 500 };
    const mBody = "some error";
    // @ts-ignore
    const stub = sinon.stub(request, "post").callsFake((uri, options, callback) => {
      callback(null, mResponse, mBody);
      done();
    });
    await expect(myRequest("url", {})).to.be.rejectedWith(mBody);
    // @ts-ignore
    stub.calledOnceWith("url", { json: {} });
    stub.restore();
  });
});
