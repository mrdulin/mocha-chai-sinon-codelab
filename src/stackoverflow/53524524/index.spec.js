const obj = require("./");
const sinon = require("sinon");
const { expect } = require("chai");

describe("53524524", () => {
  before(() => {
    class Blob {}
    global.Blob = Blob;
    global.window = {
      open() {},
      URL: {
        createObjectURL() {},
      },
    };
  });
  it("should test myFunction correctly", () => {
    const openStub = sinon.stub(window, "open");
    const createObjectURLStub = sinon.stub(global.window.URL, "createObjectURL").returns("fake object url");
    obj.myFunction("fake data");
    expect(createObjectURLStub.calledOnce).to.be.true;
    expect(openStub.calledWith("fake object url")).to.be.true;
  });
});
