const A = require("./myfile");
const B = require("./myfile2");
const sinon = require("sinon");

describe("myfile", () => {
  afterEach(() => {
    sinon.restore();
  });
  it("should pass", () => {
    const bStub = sinon.createStubInstance(B, {
      someFunctionOfClassB: sinon.stub(),
    });
    new A(bStub);
    sinon.assert.calledOnce(bStub.someFunctionOfClassB);
  });
});
