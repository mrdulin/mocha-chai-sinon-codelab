const app = require("./app");
const request = require("supertest");
const { expect } = require("chai");

describe("57872239", () => {
  it("should pass", async () => {
    const payload = {};
    const url = "/api";
    const res = await request(app)
      .delete(`${url}/credentials/123`)
      .send({ payload });
    expect(res.status).to.be.eql(500);
  });
});
