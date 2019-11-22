import { fsExists } from "./";
import sinon from "sinon";
import fs from "fs";

describe("fsExists", () => {
  afterEach(() => {
    sinon.restore();
  });
  it("should handle non-existed file", (done) => {
    const stub = sinon.stub(fs, "exists");
    const callbackStub = sinon.stub().callsFake(() => {
      done();
    });
    fsExists(callbackStub);
    stub.yield(false);
    sinon.assert.calledWith(stub, "some dir", sinon.match.func);
    sinon.assert.calledWith(callbackStub, "file does not exist");
  });

  it("should handle file", (done) => {
    const stub = sinon.stub(fs, "exists");
    const callbackStub = sinon.stub().callsFake(() => {
      done();
    });
    fsExists(callbackStub);
    stub.yield(true);
    sinon.assert.calledWith(stub, "some dir", sinon.match.func);
    sinon.assert.calledWith(callbackStub, "do something");
  });
});
