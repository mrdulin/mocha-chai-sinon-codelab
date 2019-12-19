const chai = require("chai");
const sinon = require("sinon");
const request = require("supertest");
const proxyquire = require("proxyquire");

chai.use(require("sinon-chai"));
const expect = chai.expect;

const sandbox = sinon.createSandbox();

describe("User", function() {
  describe("POST login", function() {
    it("should call validServiceURL with provided serviceURL", async () => {
      const args = { username: "username", password: "password" };
      const serviceURL = "http://127.0.0.1:3030";

      const spyValidServiceURL = sandbox.spy();
      const app = proxyquire("./app", {
        "./validServiceURL": spyValidServiceURL,
      });

      await request(app)
        .post("/login")
        .type("form")
        .send(args)
        .set("host", serviceURL);

      expect(spyValidServiceURL).to.have.been.calledWith(serviceURL);

      sandbox.restore();
    });
  });
});
