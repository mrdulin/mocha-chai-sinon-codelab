import { abc, xyz } from "./";
import { Storage } from "@google-cloud/storage";
import sinon from "sinon";
import { expect } from "chai";

describe("59373281", () => {
  afterEach(() => {
    sinon.restore();
  });
  it("abc should pass", async () => {
    const getFilesStub = sinon.stub().resolves(["file1", "file2"]);
    const bucketStub = sinon.stub(Storage.prototype, "bucket").callsFake(() => {
      return { getFiles: getFilesStub } as any;
    });
    const actual = await abc();
    expect(actual).to.be.deep.eq(["file1", "file2"]);
    sinon.assert.calledWith(bucketStub, "xxx-dev");
    sinon.assert.calledOnce(getFilesStub);
  });

  it("xyz should pass", async () => {
    const fileStub = sinon.stub().returnsThis();
    const createReadStreamStub = sinon.stub();
    const bucketStub = sinon.stub(Storage.prototype, "bucket").callsFake(() => {
      return {
        file: fileStub,
        createReadStream: createReadStreamStub,
      } as any;
    });
    const mRes = { fileName: "jestjs.pdf" };
    await xyz(mRes);
    sinon.assert.calledWith(bucketStub, "xxx-dev");
    sinon.assert.calledWith(fileStub, "jestjs.pdf");
    sinon.assert.calledOnce(createReadStreamStub);
  });
});
