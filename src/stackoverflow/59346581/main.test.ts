import { AWSSQSCollection, AWSSQSUrl } from "./main";
import sinon from "sinon";
import AWS from "aws-sdk";
import chai, { expect } from "chai";
import chaiAsPromised from "chai-as-promised";
chai.use(chaiAsPromised);

function getValidAWSSQSElement() {
  return {};
}

describe("AWSSQSCollection tests", () => {
  let instance: AWSSQSCollection;
  let sendMessageStub: sinon.SinonStub<any, any>;
  beforeEach(() => {
    // eslint-disable-next-line
    sendMessageStub = AWS.SQS.prototype.sendMessage = sinon.stub().withArgs(sinon.match.any);
  });
  afterEach(() => {
    sinon.restore();
  });
  it("generate valid message", async () => {
    const expectedMessage = {
      MessageBody: JSON.stringify({}),
      QueueUrl: AWSSQSUrl,
    };
    sendMessageStub.returns({ promise: () => Promise.resolve(true) });
    instance = new AWSSQSCollection();
    await instance.sendMessageToQueue(getValidAWSSQSElement());
    chai.assert(sendMessageStub.calledOnceWithExactly(expectedMessage));
  });

  it("bad path", async () => {
    const errorMessage: Error = new Error("test error");
    sendMessageStub.returns({ promise: () => Promise.reject(errorMessage) });
    instance = new AWSSQSCollection();
    await expect(instance.sendMessageToQueue(getValidAWSSQSElement())).to.be.rejectedWith(
      `Error adding item to AWS SQS ${errorMessage}`,
    );
  });
});
