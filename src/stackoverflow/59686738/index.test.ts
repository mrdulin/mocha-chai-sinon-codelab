import { ZippedFileBlaBla } from "./";
import * as admZip from "./admZip";
import sinon from "sinon";
import { expect } from "chai";

describe("59686738", () => {
  afterEach(() => {
    sinon.restore();
  });
  it("should throw zip decompression error", () => {
    const AdmZipStub = sinon.stub(admZip, "AdmZip").callsFake(() => {
      throw new Error("some error");
    });
    const bufferOfInvalidFile = Buffer.from([1]);
    expect(() => new ZippedFileBlaBla(bufferOfInvalidFile)).to.throw(Error);
    sinon.assert.calledWithExactly(AdmZipStub, bufferOfInvalidFile);
  });

  it("should create adm zip", () => {
    const mZip = {};
    const AdmZipStub = sinon.stub(admZip, "AdmZip").callsFake(() => mZip);
    const bufferOfInvalidFile = Buffer.from([1]);
    const instance = new ZippedFileBlaBla(bufferOfInvalidFile);
    expect(instance.zip).to.be.eql(mZip);
    sinon.assert.calledWithExactly(AdmZipStub, bufferOfInvalidFile);
  });
});
