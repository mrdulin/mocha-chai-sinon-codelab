import sinon from "sinon";
import proxyquire from "proxyquire";

describe("message service", () => {
  afterEach(() => {
    sinon.restore();
  });

  it("handleNewMessage should work", async () => {
    const delayStub = sinon.stub().resolves({});
    const { MessageService } = proxyquire("./MessageService.ts", {
      "@azure/service-bus": {
        delay: delayStub,
      },
    });
    const messageServiceMock = new MessageService();
    await messageServiceMock.handleNewMessage();
    sinon.assert.calledWith(delayStub, 5000);
  });
});
