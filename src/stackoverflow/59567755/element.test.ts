import MyElement from "./element";
import sinon from "sinon";
import { expect } from "chai";

// You don't need to setup jsdom in browser test environment
// jsdom start
import jsdom from "jsdom";
const html = '<!doctype html><html><head><meta charset="utf-8">' + "</head><body></body></html>";
const url = "http://localhost";
const document = new jsdom.JSDOM(html, { url });
const window = document.window;
(global as any).document = window.document;
(global as any).window = window;
// jsdom end

describe("MyElement", () => {
  afterEach(() => {
    sinon.restore();
  });
  describe("#construtor", () => {
    it("should pass", () => {
      const addEventListenerStub = sinon.stub(window, "addEventListener");
      const handleClickOutsideStub = sinon.stub(MyElement.prototype, "_handleClickOutside").callsFake(() => {
        console.log("calling fake");
      });
      new MyElement();
      addEventListenerStub.yield();
      sinon.assert.calledWithExactly(addEventListenerStub, "click", sinon.match.func);
      sinon.assert.calledOnce(handleClickOutsideStub);
    });
  });

  describe("#_handleClickOutside", () => {
    it("should pass", () => {
      const el = new MyElement();
      el._handleClickOutside();
      expect(el.active).to.be.false;
    });
  });
});
