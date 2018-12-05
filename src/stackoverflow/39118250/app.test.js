const app = require("./app");
const request = require("supertest");
const expect = require("chai").expect;

describe("GET requests", function() {
  const agent = request(app);
  let cookies;

  before((done) => {
    agent.post("/signin").expect(200, (err, res) => {
      if (err) return done(err);
      expect(res.headers).to.have.property("set-cookie");
      cookies = res.headers["set-cookie"].pop().split(";")[0];
      done();
    });
  });
  after((done) => {
    app.close(done);
  });

  it("should return a 200 HTTP status code", function(done) {
    console.log(cookies);
    agent
      .get("/api/someendpoint")
      .set("Cookie", [cookies])
      .end(function(err, res) {
        if (err) return done(err);
        expect(res.status).to.equal(200);
        done();
      });
  });
});
