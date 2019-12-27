const Parser = require("./parser");
const sinon = require("sinon");

describe("Parser", () => {
  afterEach(() => {
    sinon.restore();
  });
  describe("#parsePDF", () => {
    it("should clean up raw test", () => {
      const callback = sinon.stub();
      sinon.stub(Parser, "extractText").yields(null, "fake raw text");
      sinon.stub(Parser, "cleanUp").returns("fake clean text");
      Parser.parsePDF("./somepath", callback);
      sinon.assert.calledWith(Parser.extractText, "./somepath", sinon.match.func);
      sinon.assert.calledWith(Parser.cleanUp, "fake raw text");
      sinon.assert.calledWith(callback, null, "fake clean text");
    });

    it("should handle err", () => {
      const callback = sinon.stub();
      const mError = new Error("some error");
      sinon.stub(Parser, "extractText").yields(mError, null);
      sinon.stub(Parser, "cleanUp").returns("fake clean text");
      Parser.parsePDF("./somepath", callback);
      sinon.assert.calledWith(Parser.extractText, "./somepath", sinon.match.func);
      sinon.assert.calledWith(callback, mError);
    });
  });
});
