import { publish, pubnub } from "./";
import sinon from "sinon";

describe("59170422", () => {
  afterEach(() => {
    sinon.restore();
  });
  it("should pass", () => {
    const logSpy = sinon.spy(console, "log");
    const addListenerStub = sinon.stub();
    const publishStub = sinon.stub().resolves({});
    const subscribeStub = sinon.stub();
    Object.defineProperty(pubnub, "addListener", { value: addListenerStub });
    Object.defineProperty(pubnub, "publish", { value: publishStub });
    Object.defineProperty(pubnub, "subscribe", { value: subscribeStub });
    publish();
    addListenerStub.yieldTo("status", { category: "PNConnectedCategory" });
    sinon.assert.calledOnce(addListenerStub);
    sinon.assert.calledOnce(publishStub);
    publishStub.yield(200, "haha");
    sinon.assert.calledWith(logSpy, 200, "haha");
    addListenerStub.yieldTo("message", { message: { title: "I am title", description: "I am description" } });
    sinon.assert.calledWith(logSpy, "I am title");
    sinon.assert.calledWith(logSpy, "I am description");
  });
});
