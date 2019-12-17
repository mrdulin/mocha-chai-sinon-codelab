import { abc } from "./";
import { Storage } from "@google-cloud/storage";
import sinon from "sinon";
import { expect } from "chai";

describe("abc", () => {
  afterEach(() => {
    sinon.restore();
  });
  it("should pass", async () => {
    const getFilesStub = sinon.stub().resolves(["file1", "file2"]);
    const bucketStub = sinon.stub(Storage.prototype, "bucket").callsFake(() => {
      return { getFiles: getFilesStub } as any;
    });
    const actual = await abc();
    expect(actual).to.be.deep.eq(["file1", "file2"]);
    sinon.assert.calledWith(bucketStub, "xxx-dev");
    sinon.assert.calledOnce(getFilesStub);
  });
});
