const app = require("./app");
const request = require("supertest");
const path = require("path");

describe("34939199", () => {
  it("should pass", (done) => {
    process.env.API_TOKEN = "123";
    process.env.API_KEY = "abc";
    request(app)
      .post("/companies/")
      .set({ apikey: "TestHashKey", "app-token": process.env.API_TOKEN, "app-key": process.env.API_KEY })
      .field("Content-Type", "multipart/form-data")
      .field("name", "sample_companyx")
      .field("phoneNumber", "+963014311354")
      .attach("logo", path.resolve(__dirname, "fixtures/test_logo.jpg"))
      .expect(200)
      .end(function(err, res) {
        if (err) {
          throw err;
        }
        done();
      });
  });
});
