import { abc } from ".";
import sinon from "sinon";
import { Storage } from "@google-cloud/storage";

describe("59405183", () => {
  beforeEach(() => {
    sinon.restore();
  });
  afterEach(() => {
    sinon.restore();
  });
  it("should pass", () => {
    const mReq = {};
    const mRes = {
      send: sinon.stub(),
    };
    const onStub = sinon.stub();
    const onDataStub = onStub
      .withArgs("data")
      .yields("sinon")
      .returnsThis();
    const onEndStub = onStub.withArgs("end").yields();

    const readStreamStub = { on: onStub };
    const stubs = {
      file: sinon.stub().returnsThis(),
      createReadStream: sinon.stub().returns(readStreamStub),
    };
    const bucketStub = sinon.stub(Storage.prototype, "bucket").callsFake(() => stubs as any);
    abc(mReq, mRes);
    sinon.assert.calledWith(bucketStub, "abc-xyz");
    sinon.assert.calledWith(stubs.file, "Sample.json");
    sinon.assert.calledOnce(stubs.createReadStream);
    sinon.assert.calledWith(onDataStub, "data", sinon.match.func);
    sinon.assert.calledWith(onEndStub, "end", sinon.match.func);
    sinon.assert.calledWith(mRes.send, "sinon");
  });
});
