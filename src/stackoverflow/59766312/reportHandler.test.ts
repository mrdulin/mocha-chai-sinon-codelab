import { ReportHandler } from "./reportHandler";
import sinon from "sinon";

describe("59766312", () => {
  let sandbox;
  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });
  describe("#handleReportAsync", () => {
    it("should update file", async () => {
      const reportServiceStub = { updateFile: sandbox.stub() };
      const s3Handler = require("./s3Handler");
      const downloadFileStub = sandbox.stub().resolves({ Body: "a" });
      const s3HandlerInstanceStub = { downloadFile: downloadFileStub };
      const s3HandlerStub = sandbox.stub(s3Handler, "default").callsFake(() => s3HandlerInstanceStub);
      const reportHandler = new ReportHandler(reportServiceStub);
      const report = { id: 1 };
      await reportHandler.handleReportAsync(report);
      sandbox.assert.calledOnce(s3HandlerStub);
      sandbox.assert.calledWithExactly(s3HandlerInstanceStub.downloadFile, 1);
      sandbox.assert.calledWithExactly(reportServiceStub.updateFile, 1, "a");
    });
  });
});
