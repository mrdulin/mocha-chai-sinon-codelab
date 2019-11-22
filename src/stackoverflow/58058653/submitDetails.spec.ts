import { expect } from "chai";
import sinon, { SinonSandbox, SinonSpy } from "sinon";

const submitDetails = require("./submitDetails");
const sendEmail = require("./sendEmail");

describe("submitDetails", () => {
  let sandbox: SinonSandbox;

  before(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe("submitDetails", () => {
    let sendEmailSpy: SinonSpy;

    beforeEach(() => {
      sendEmailSpy = sandbox.spy(sendEmail, "sendEmail");
    });

    it("sendEmail", () => {
      submitDetails.submitDetails();
      sandbox.assert.calledOnce(sendEmailSpy);
      expect(sendEmailSpy.calledOnce).to.be.true;
    });
  });
});
