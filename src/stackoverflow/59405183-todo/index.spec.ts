import { abc } from ".";
import sinon from "sinon";
import { Storage } from "@google-cloud/storage";

describe.skip("59405183", () => {
  it("should pass", () => {
    const mReq = {};
    const mRes = {
      send: sinon.stub(),
    };
    const stubs = {
      file: sinon.stub().returnsThis(),
      createReadStream: sinon.stub().returnsThis(),
      on: sinon
        .stub()
        // .onCall(0)
        // .callsArgWith(1, "jestjs")
        .returnsThis(),
      // .onCall(1)
      // .callsArgWith(1, "sinon"),
    };
    const bucketStub = sinon.stub(Storage.prototype, "bucket").callsFake(() => stubs as any);
    abc(mReq, mRes);
    sinon.assert.calledWith(bucketStub, "abc-xyz");
    sinon.assert.calledWith(stubs.file, "Sample.json");
    sinon.assert.calledOnce(stubs.createReadStream);
    stubs.on.yields(["jestjs"]);
    sinon.assert.calledWith(mRes.send, "jestjs");
  });
});
