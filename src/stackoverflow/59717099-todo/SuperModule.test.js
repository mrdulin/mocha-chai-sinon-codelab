const chai = require("chai");
const assert = chai.assert;
const sinon = require("sinon");

let SuperModule;

describe.skip("Tests", () => {
  before(() => {
    SuperModule = require("./SuperModule");
    console.log(SuperModule);
    sinon.stub(SuperModule, "a").callsFake(() => {
      return "123321";
    });
  });
  describe("checking the function", () => {
    it("should not work with the stub", () => {
      assert.equal(SuperModule.b(), 123326);
    });
  });
});
