const app = require("./app");
const request = require("supertest");
const { expect } = require("chai");

describe("42680896", () => {
  it("should pass", (done) => {
    request(app)
      .get("/")
      .expect(422)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.body).to.be.eql({ error: "make an error" });
        done();
      });
  });
});
