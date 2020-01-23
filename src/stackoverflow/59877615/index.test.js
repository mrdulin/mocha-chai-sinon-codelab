const sinon = require("sinon");
const mod = require("./");

describe("59877615", () => {
  afterEach(() => {
    sinon.restore();
  });
  it("should call function1 and function2", () => {
    const funtion1Stub = sinon.stub(mod, "function1");
    const funtion2Stub = sinon.stub(mod, "function2");
    const instance = new mod.SomeClass();
    instance.topFunction("a", "a");
    sinon.assert.calledOnce(funtion1Stub);
    sinon.assert.calledOnce(funtion2Stub);
  });

  it("should only call function2", () => {
    const funtion2Stub = sinon.stub(mod, "function2");
    const instance = new mod.SomeClass();
    instance.topFunction("a", "b");
    sinon.assert.calledOnce(funtion2Stub);
  });
});
