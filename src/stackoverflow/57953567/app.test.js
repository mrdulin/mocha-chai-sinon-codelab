const app = require("./app");
const superagent = require("superagent");
const { expect } = require("chai");

describe("57953567", () => {
  let server;
  const port = 4000;
  before((done) => {
    server = app.listen(port, () => {
      console.info(`HTTP server is listening on http://localhost:${server.address().port}`);
      done();
    });
  });
  after((done) => {
    server.close(done);
  });
  it("should pass", () => {
    return superagent
      .get("http://localhost:4000/v1/process/web")
      .query({ user: "nux" })
      .then((res) => {
        console.log(res.body);
        expect(res.body).to.be.eql({ user: "nux" });
        expect(res.status).to.be.equal(200);
      });
  });
});
