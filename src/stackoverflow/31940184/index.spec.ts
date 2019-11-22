import sinon from "sinon";
import proxyquire from "proxyquire";

describe("31940184", () => {
  afterEach(() => {
    sinon.restore();
  });
  it("myDialogMethod", () => {
    let buttons;
    const dialogStub = sinon.stub().callsFake((options) => {
      buttons = options.buttons;
    });
    const htmlStub = sinon.stub();
    const jquerySpy = sinon.stub().callsFake(() => {
      return {
        html: htmlStub,
        dialog: dialogStub,
      };
    });
    const { myDialogMethod } = proxyquire("./", {
      jquery: jquerySpy,
    });
    const alert = sinon.stub();
    const buttonCallback = function() {
      alert("callback");
    };
    const buttonCallbackSpy = sinon.spy(buttonCallback);
    myDialogMethod("Modal Title", "Modal Message", "OK", buttonCallbackSpy);
    sinon.assert.calledWith(jquerySpy.firstCall, "#DialogMessage");
    sinon.assert.calledWith(jquerySpy.secondCall, "#myDialog");
    sinon.assert.calledWith(dialogStub.firstCall, {
      modal: true,
      title: "Modal Title",
      buttons: [{ text: "OK", click: sinon.match.func }],
    });
    const button = buttons[0];
    button.click();
    sinon.assert.calledOnce(buttonCallbackSpy);
    sinon.assert.calledWith(alert, "callback");
    sinon.assert.calledWith(jquerySpy.thirdCall, button);
    sinon.assert.calledWith(dialogStub.secondCall, "close");
  });
});
