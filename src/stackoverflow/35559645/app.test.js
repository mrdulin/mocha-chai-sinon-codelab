const request = require("supertest");
const app = require("./app");

describe("GET /api", function() {
  after((done) => {
    app.close(done);
  });
  it("respond with json", function(done) {
    request(app)
      .get("/api/")
      .expect(200, done);
  });
});
