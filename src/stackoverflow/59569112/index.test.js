const jsdom = require("jsdom");
const sinon = require("sinon");
const proxyquire = require("proxyquire");

describe("trackCustomDyEvents", () => {
  before(() => {
    const html = '<!doctype html><html><head><meta charset="utf-8">' + "</head><body></body></html>";
    const url = "http://localhost";
    const document = new jsdom.JSDOM(html, { url });
    const window = document.window;
    global.document = window.document;
    global.window = window;
  });
  afterEach(() => {
    sinon.restore();
  });
  it("should call DY.API", () => {
    const onStub = sinon.stub().yields();
    const jqueryStub = sinon.stub().callsFake(() => ({
      on: onStub,
    }));
    const trackCustomDyEvents = proxyquire("./", {
      jquery: jqueryStub,
    });
    const APISpy = sinon.stub(window.DY, "API");
    const predicateStub = sinon.stub().returns(true);
    const events = [
      { type: "click", element: "button", name: "a", predicate: predicateStub },
      { type: "submit", element: "form", name: "b", predicate: predicateStub },
    ];
    trackCustomDyEvents(events);
    sinon.assert.calledWithExactly(onStub.firstCall, "click", "button", sinon.match.func);
    sinon.assert.calledWithExactly(onStub.secondCall, "submit", "form", sinon.match.func);
    sinon.assert.calledTwice(predicateStub);
    sinon.assert.calledWithExactly(APISpy.firstCall, "event", { name: "a" });
    sinon.assert.calledWithExactly(APISpy.secondCall, "event", { name: "b" });
  });

  it("should not call DY.API", () => {
    const onStub = sinon.stub().yields();
    const jqueryStub = sinon.stub().callsFake(() => ({
      on: onStub,
    }));
    const trackCustomDyEvents = proxyquire("./", {
      jquery: jqueryStub,
    });
    const APISpy = sinon.stub(window.DY, "API");
    const predicateStub = sinon.stub().returns(false);
    const events = [
      { type: "click", element: "button", name: "a", predicate: predicateStub },
      { type: "submit", element: "form", name: "b", predicate: predicateStub },
    ];
    trackCustomDyEvents(events);
    sinon.assert.calledWithExactly(onStub.firstCall, "click", "button", sinon.match.func);
    sinon.assert.calledWithExactly(onStub.secondCall, "submit", "form", sinon.match.func);
    sinon.assert.calledTwice(predicateStub);
    sinon.assert.notCalled(APISpy);
  });
});
