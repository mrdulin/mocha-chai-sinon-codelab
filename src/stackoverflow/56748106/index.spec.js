const { main, iteratee } = require("./");
const sinon = require("sinon");
const async = require("async");

describe("56748106", () => {
  let clock;
  beforeEach(() => {
    clock = sinon.useFakeTimers();
  });
  afterEach(() => {
    clock.restore();
    sinon.restore();
  });
  describe("iteratee", () => {
    it("should pass", () => {
      sinon.spy(global, "setTimeout");
      const job = { name: "job1", delay: 2000 };
      const callback = sinon.stub();
      iteratee(job, callback);
      clock.tick(2000);
      sinon.assert.calledWithExactly(callback, null, job.name);
      sinon.assert.calledWithExactly(setTimeout, sinon.match.func, job.delay);
    });
  });

  describe("main", () => {
    it("should handle error", () => {
      const logSpy = sinon.spy(console, "log");
      const mError = new Error("some error");
      sinon.stub(async, "eachLimit").yieldsRight(mError);
      main();
      sinon.assert.calledWithExactly(
        async.eachLimit,
        [
          { name: "job1", delay: 100 },
          { name: "job2", delay: 200 },
          { name: "job3", delay: 300 },
        ],
        3,
        iteratee,
        sinon.match.func,
      );
      sinon.assert.calledWithExactly(logSpy, mError);
    });
  });
});
