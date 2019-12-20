const app = require("./app");
const supertest = require("supertest");

describe("test", () => {
  after((done) => {
    app.close(done);
  });

  it("Test 1", (done) => {
    supertest(app)
      .get("/")
      .expect(200, done);
  });
});
