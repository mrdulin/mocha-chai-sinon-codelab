import sinon from "sinon";
import * as utils from "./utils";
import printName from "./user";

const assert = require("assert");

describe("print name", () => {
  it("should fetch and print the user name", async () => {
    let utilsStub = sinon.stub(utils, "getUser");
    utilsStub.withArgs("user").returns("test");
    assert.equal("test", printName());
  });
});
