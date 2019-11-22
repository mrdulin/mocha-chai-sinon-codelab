import { main, fsExtra, yaml, logger } from ".";
import sinon from "sinon";
import { expect } from "chai";

describe("main", () => {
  it("should safeLoad error", (done) => {
    const mError = new Error("fake error");
    const warnSpy = sinon.spy(logger, "warn");
    const readFileSyncStub = sinon.stub<any, string>(fsExtra, "readFileSync").returns("file content");
    const safeLoadStub = sinon.stub(yaml, "safeLoad").callsFake((content, callback) => {
      callback(mError);
      done();
    });
    main();
    expect(readFileSyncStub.calledWith("./.tmp/sinon.js", "utf8")).to.be.true;
    expect(safeLoadStub.calledWith("file content", sinon.match.func));
    expect(warnSpy.calledWith(mError)).to.be.true;
  });
});
