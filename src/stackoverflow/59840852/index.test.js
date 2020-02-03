const proxyquire = require("proxyquire");
const sinon = require("sinon");
const jsdom = require("jsdom");

describe("59840852", () => {
  before(() => {
    const html = '<!doctype html><html><head><meta charset="utf-8">' + "</head><body></body></html>";
    const url = "http://localhost";
    const document = new jsdom.JSDOM(html, { url });
    const window = document.window;
    global.document = window.document;
    global.window = window;
  });
  it("should set item", () => {
    const localStorageStub = {
      getItem: sinon
        .stub()
        .withArgs("loginHasBeenTracked")
        .returns(null),
      setItem: sinon.stub(),
    };
    global.localStorage = localStorageStub;
    const jqueryStub = { ready: sinon.stub().callsFake((handler) => handler()) };
    const $ = sinon.stub().callsFake(() => jqueryStub);
    proxyquire("./", { jquery: $ });
    sinon.assert.calledWithExactly($, document);
    sinon.assert.calledWithExactly(localStorage.getItem, "loginHasBeenTracked");
    sinon.assert.calledWithExactly(localStorage.setItem, "loginHasBeenTracked", true);
  });

  it("should do nothing if login has been tracked", () => {
    const localStorageStub = {
      getItem: sinon
        .stub()
        .withArgs("loginHasBeenTracked")
        .returns(true),
      setItem: sinon.stub(),
    };
    global.localStorage = localStorageStub;
    const jqueryStub = { ready: sinon.stub().callsFake((handler) => handler()) };
    const $ = sinon.stub().callsFake(() => jqueryStub);
    proxyquire("./", { jquery: $ });
    sinon.assert.calledWithExactly($, document);
    sinon.assert.calledWithExactly(localStorage.getItem, "loginHasBeenTracked");
    sinon.assert.notCalled(localStorage.setItem);
  });
});
