import sinon from "sinon";
import { expect } from "chai";

describe("getSome", () => {
  it("should stub", () => {
    const getSomeStub = sinon.stub().returns("stub get some");
    require.cache[require.resolve("./mod.ts")] = {
      exports: getSomeStub,
    };
    const main = require("./");
    const actual = main();
    expect(actual).to.be.equal("stub get some");
    sinon.assert.calledOnce(getSomeStub);
  });
});
