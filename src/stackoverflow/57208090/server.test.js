const server = require("./server");
const sinon = require("sinon");
const cron = require("node-cron");
const { expect } = require("chai");

describe("57208090", () => {
  afterEach(() => {
    sinon.restore();
  });
  describe("#scheduledJob", () => {
    it("should schedule job", () => {
      const pattern = "* * * * * *";
      const runStub = sinon.stub(server, "run");
      const scheduleStub = sinon
        .stub(cron, "schedule")
        .yields()
        .returns({});
      server.scheduledJob(pattern);
      sinon.assert.calledWith(scheduleStub, pattern, sinon.match.func);
      sinon.assert.calledOnce(runStub);
      expect(server.cronJob).to.be.eql({});
    });
  });

  describe("#run", () => {
    it("should run server", () => {
      const logSpy = sinon.spy(console, "log");
      server.run();
      sinon.assert.calledWith(logSpy, "run called");
    });
  });
});
