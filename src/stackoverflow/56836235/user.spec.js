const sinon = require("sinon");
const { expect } = require("chai");
const user = require("./user");
const Database = require("./db");

describe("user", () => {
  it("should call save once", function() {
    const saveStub = sinon.stub(Database, "save");
    user.setupNewUser({ name: "test" }, function() {});
    expect(saveStub.calledOnce).to.be.true;
  });
});
