const AWS = require("aws-sdk");
const sinon = require("sinon");
const zlib = require("zlib");
const readline = require("readline");

describe("59545823", () => {
  describe("#s3FileTypeDetector", () => {
    const sampleInput = {
      s3Details: { bucket: "some-bucket", key: "some-key" },
    };
    let util;
    let getObjectStubbed;
    let createGunzipStubbed;
    let createInterfaceStubbed;
    beforeEach(function() {
      getObjectStubbed = {
        createReadStream: sinon
          .stub()
          .returns(Buffer.from("eJxLTErWSS4u00lJTQMAF6YD+g==", "base64"))
          .returnsThis(),
        on: sinon.stub().returnsThis(),
        pipe: sinon.stub(),
      };
      AWS.S3.prototype.getObject = sinon.stub().callsFake(() => getObjectStubbed);
      createGunzipStubbed = {
        on: sinon.stub(),
      };
      sinon.stub(zlib, "createGunzip").callsFake(() => createGunzipStubbed);
      createInterfaceStubbed = {
        on: sinon.stub(),
        close: sinon.stub(),
      };
      sinon.stub(readline, "createInterface").callsFake(() => createInterfaceStubbed);
      util = require("./util");
    });

    afterEach(() => {
      sinon.restore();
    });

    it("should get data to send correctly", () => {
      const callbackStub = sinon.stub();
      const mLine = '{"data": "fake line"}';
      readline
        .createInterface()
        .on.withArgs("line")
        .yields(mLine);
      util.s3FileTypeDetector(sampleInput.s3Details, callbackStub);
      sinon.assert.calledWithExactly(
        AWS.S3.prototype.getObject,
        { Bucket: "some-bucket", Key: "some-key" },
        sinon.match.func,
      );
      sinon.assert.calledOnce(getObjectStubbed.createReadStream);
      sinon.assert.calledWithExactly(getObjectStubbed.on, "error", sinon.match.func);
      sinon.assert.calledOnce(zlib.createGunzip);
      sinon.assert.calledWithExactly(zlib.createGunzip().on, "error", sinon.match.func);
      sinon.assert.calledWithExactly(readline.createInterface, { input: undefined, output: process.stdout });
      sinon.assert.calledWithExactly(readline.createInterface().on, "line", sinon.match.func);
      sinon.assert.calledWithExactly(callbackStub, null, { fileType: "JSON" });
    });
  });
});
