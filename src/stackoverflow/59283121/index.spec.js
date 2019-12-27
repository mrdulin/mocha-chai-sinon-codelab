const sinon = require("sinon");
const { Storage } = require("@google-cloud/storage");
const { listFiles } = require(".");

describe("listFiles", () => {
  afterEach(() => {
    sinon.restore();
  });
  it("should pass", async () => {
    const mFiles = [{ name: "sinon" }, { name: "mocha" }, { name: "chai" }];
    const getFilesStub = sinon.stub().resolves([mFiles]);
    const bucketStub = sinon.stub(Storage.prototype, "bucket").callsFake(() => ({ getFiles: getFilesStub }));
    const mReq = { body: { bucket: "xxx-dev" }, query: { bucket: "xxx-release" } };
    const mRes = { status: sinon.stub().returnsThis(), send: sinon.stub() };
    await listFiles(mReq, mRes);
    sinon.assert.calledWith(bucketStub, "xxx-dev");
    sinon.assert.calledOnce(getFilesStub);
    sinon.assert.calledWith(mRes.status, 200);
    sinon.assert.calledWith(mRes.send, ["sinon", "mocha", "chai"]);
  });
});
