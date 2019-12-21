const sinon = require("sinon");
const { expect } = require("chai");

describe("59435659", () => {
  let sandbox;
  before(() => {
    sandbox = sinon.createSandbox();
  });
  afterEach(() => {
    sinon.restore();
  });
  it("should pass", () => {
    const bulkUpdateDependenciesStub = sandbox.stub().returns("stubbed data");
    require.cache[require.resolve("./bulk-update-dependencies.js")] = {
      exports: bulkUpdateDependenciesStub,
    };
    const bulkUpdateDependencies = require("./bulk-update-dependencies.js");
    const actual = bulkUpdateDependencies();
    expect(actual).to.be.equal("stubbed data");
    sinon.assert.calledOnce(bulkUpdateDependenciesStub);
  });
});
