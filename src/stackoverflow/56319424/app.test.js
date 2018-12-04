const app = require("./app");
const request = require("supertest");
const agent = request(app);

describe("Test report api ", function() {
  it("should get the report for given date range", function(done) {
    this.timeout(100000);
    agent
      .get("/rbac/aa/contentful/getReport")
      .query({ startDate: "1557759433000", endDate: "1558450633000" })
      .expect(200)
      .end(function(err, res) {
        if (err) {
          return done(err);
        }
        done();
      });
  });
});
