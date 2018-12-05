const app = require("./app");
const superagent = require("superagent");
const { expect } = require("chai");

describe("21040811", () => {
  let server;
  const port = 4001;
  const agent = superagent.agent();
  before((done) => {
    server = app.listen(port, () => {
      console.info(`HTTP server is listening on http://localhost:${port}`);
      done();
    });
  });
  after((done) => {
    server.close(done);
  });
  it("should return 401 status code", () => {
    return agent.get(`http://localhost:${port}/protected`).catch((err) => {
      expect(err.response.status).to.be.equal(401);
    });
  });

  it("should sign in success and access /protected API correctly", () => {
    return agent
      .post(`http://localhost:${port}/signin`)
      .then((res) => {
        expect(res.status).to.be.equal(200);
      })
      .then(() => agent.get(`http://localhost:${port}/protected`))
      .then((res) => {
        expect(res.status).to.be.equal(200);
        expect(res.body).to.be.eql({ data: "protected data" });
      });
  });
});
