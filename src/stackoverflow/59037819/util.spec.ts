import sinon from "sinon";
import { expect } from "chai";
import * as util from "./util";
const validate = require("./validate");

describe("Check", () => {
  it("should fail due to error", async () => {
    const req = {
      authData: { user_id: "mock" },
      body: { num: "mock", tikcet: "mock" },
      request_id: "mock",
    };
    const res = {
      send: sinon.spy(),
      status: sinon.spy(),
    };
    const next = sinon.spy();
    const flag = "";

    const mock_buffer = {
      toJSON: function() {
        return { body: { environment: "mock", status: "mock" } };
      },
      statusCode: 500,
    };
    const validateTicketStub = sinon.stub(validate, "validateTicket").resolves(mock_buffer);
    await util.validateTicketReqs(req, res, next, flag, "mock");

    expect(res.send.calledOnce).to.be.true;
    expect(res.status.firstCall.args[0]).to.equal(500);
    sinon.assert.calledOnce(validateTicketStub);
    validateTicketStub.restore();
  });
});
