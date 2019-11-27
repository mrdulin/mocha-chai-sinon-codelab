const sinon = require("sinon");
const { expect } = require("chai");
const app = require(".");

describe("main", () => {
  it("should stub readSite", async () => {
    const readSiteStub = sinon.stub(app, "readSite").resolves("blabla");
    const actual = await app.main();
    expect(actual).to.be.equal("blabla");
    readSiteStub.restore();
  });
});
