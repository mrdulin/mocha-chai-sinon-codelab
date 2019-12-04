import { pingHandler } from "./";
import sinon from "sinon";

describe("pingHandler", () => {
  it("should return 200", () => {
    const mRes = {
      status: sinon.stub().returnsThis(),
      send: sinon.stub(),
    };

    pingHandler({}, mRes, {});
    sinon.assert.calledWith(mRes.status, 200);
    sinon.assert.calledWith(mRes.send, "Hello world");
  });
});
