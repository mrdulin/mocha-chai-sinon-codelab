const supertest = require("supertest");
const app = require("./app");
const agent = supertest(app);
const { expect } = require("chai");

describe("Check if endpoint are reachable", () => {
  const clientData = { name: "supertest" };
  before((done) => {
    agent
      .get("/router")
      .query(clientData)
      .expect(302)
      .end((err, res) => {
        if (!err) {
          done();
        } else {
          done(err);
        }
      });
  });

  it("should pass", async () => {
    const res = await agent.get("/api");
    expect(res.status).to.be.eq(200);
  });
});
