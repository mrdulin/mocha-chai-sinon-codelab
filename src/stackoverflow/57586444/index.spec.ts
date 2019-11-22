import sinon from "sinon";
const timesMediator = require("./");
import { expect } from "chai";

describe("timesMediator", () => {
  afterEach(() => {
    sinon.restore();
  });
  it("#getTimes", async () => {
    const mProcessTimesResponse = [{ a: "A", b: "B" }] as any;
    const mReq = {};
    const mRes = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };
    const stub = sinon.stub(timesMediator, "processTimes").resolves(mProcessTimesResponse);
    await timesMediator.getTimes(mReq, mRes);
    expect(stub.calledWith({}, sinon.match.array)).to.be.true;
    expect(mRes.status.calledWith(200)).to.be.true;
    expect(mRes.json.calledWith(mProcessTimesResponse)).to.be.true;
  });

  it("#processTimes", async () => {
    const actualValue = await timesMediator.processTimes({}, [Promise.resolve(1)]);
    expect(actualValue).to.eql([1]);
  });
});
