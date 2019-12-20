const app = require("./app");
const superagent = require("superagent");
const { expect } = require("chai");

describe("59246379", () => {
  let server;
  before((done) => {
    server = app.listen(3003, () => {
      console.info(`HTTP server is listening on http://localhost:${server.address().port}`);
      done();
    });
  });

  after((done) => {
    server.close(done);
  });
  it("should pass", () => {
    const name = "testname";
    return superagent
      .get("http://localhost:3003/test")
      .query({ filter: "_name eq " + name })
      .then((res) => {
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.eql({ name: "testname" });
      });
  });
});
