const sinon = require("sinon");
const { expect } = require("chai");
const Socket = require("./index");

class WebSocket {
  constructor(uri) {}
  onopen() {}
  onmessage() {}
}
global.WebSocket = WebSocket;

describe("17806481", () => {
  it("should test connect correctly", () => {
    const logSpy = sinon.spy(console, "log");
    const socket = Socket.connect();
    const onopenSpy = sinon.spy(socket, "onopen");
    const onmessageSpy = sinon.spy(socket, "onmessage");
    onopenSpy();
    expect(logSpy.firstCall.calledWith("connected to the server")).to.be.true;
    const mMessage = { data: "fake data" };
    onmessageSpy(mMessage);
    expect(logSpy.secondCall.calledWith("Received:", mMessage.data)).to.be.true;
  });
});
