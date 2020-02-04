const app = require("./app");
const sinon = require("sinon");
const { expect } = require("chai");

describe("49858991", () => {
  afterEach(() => {
    sinon.restore();
  });
  describe("#saveInGlobal", () => {
    it("should save in global", async () => {
      global.pass = "a";
      const getPassStub = sinon.stub(app, "getPass").resolves("mock value");
      await app.saveInGlobal();
      sinon.assert.calledOnce(getPassStub);
      expect(global.pass).to.be.eq("mock value");
    });

    it("should do nothing", async () => {
      global.pass = null;
      const getPassStub = sinon.stub(app, "getPass").resolves("mock value");
      await app.saveInGlobal();
      sinon.assert.notCalled(getPassStub);
      expect(global.pass).to.be.eq(null);
    });
  });

  describe("#getPass", () => {
    it('should return "test"', async () => {
      const actual = await app.getPass();
      expect(actual).to.be.eq("test");
    });
  });
});
