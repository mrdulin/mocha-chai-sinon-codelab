import proxyquire from "proxyquire";
import sinon from "sinon";

describe("sendAPIRequest", function() {
  afterEach(() => {
    sinon.restore();
  });

  it("make api", async function() {
    const networkServiceInstanceStub = {
      call: sinon.stub(),
    };
    const NetworkServiceStub = sinon.stub().callsFake(() => networkServiceInstanceStub);
    const { sendAPIRequest } = proxyquire("./", {
      "./services": {
        default: NetworkServiceStub,
      },
    });
    await sendAPIRequest({ name: "foobar" });
    sinon.assert.calledOnce(NetworkServiceStub);
    sinon.assert.calledWithExactly(networkServiceInstanceStub.call, { name: "foobar" });
  });
});

// import NetworkService from "./services";
// import { sendAPIRequest } from "./";

// it("should make api", async () => {
//   const callStub = sinon.stub(NetworkService.prototype, "call");
//   await sendAPIRequest({ name: "foobar" });
//   sinon.assert.calledWithExactly(callStub, { name: "foobar" });
// });
