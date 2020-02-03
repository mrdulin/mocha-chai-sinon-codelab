const expect = require("chai").expect;
const request = require("request");
const createServer = require("./");

describe("60032042", () => {
  let server;
  before(async () => {
    server = await createServer(3000);
  });
  after(() => {
    server.stop();
  });
  it("Greet Bob", function(done) {
    request("http://localhost:3000/greet/Bob", function(error, response, body) {
      body = JSON.parse(body);
      expect(body).to.have.property("name");
      done();
    });
  });
});
