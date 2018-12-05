import request from "supertest";
import sinon from "sinon";
import * as controller from "./controller";
import { expect } from "chai";

describe("Admin routes tests", () => {
  it("Tests login admin route", (done) => {
    const bar = () => {
      console.log("bar");
    };
    const fooStub = sinon.stub(controller, "foo").callsFake(bar);
    const { app } = require("./app");
    const agent = request.agent(app);
    agent
      .post("/foo")
      .set("Accept", "application/json")
      .timeout(1000)
      .end((err, res) => {
        sinon.assert.calledOnce(fooStub);
        expect(res).to.be.undefined;
        expect(err).to.be.an.instanceof(Error);
        done();
      });
  });
});
