import * as service from "./service";
import * as appActions from "./appActions";
import * as listActions from "./listActions";
import sinon from "sinon";

describe("fetchList", () => {
  let getListStub;
  let handleResponseStub;

  beforeEach(() => {
    getListStub = sinon.stub(service, "getList");
    handleResponseStub = sinon.stub(appActions, "handleResponse");
  });

  afterEach(() => {
    getListStub.restore();
    handleResponseStub.restore();
  });

  it("should dispatch handleResponse on success", async () => {
    const dispatchStub = sinon.stub();
    const id = 1;
    const returnValue = "return value";
    getListStub.withArgs(id).resolves(returnValue);

    await listActions.fetchList(id)(dispatchStub);

    sinon.assert.calledOnce(getListStub);
    sinon.assert.notCalled(dispatchStub);
    sinon.assert.calledOnce(handleResponseStub); // Fails
  });
});
