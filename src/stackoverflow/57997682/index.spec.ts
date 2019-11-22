import { expect } from "chai";
import sinon from "sinon";

const Aupdate = require("./");

describe("Aupdate", () => {
  it("should check if function is called or not", function() {
    const reqUpdateAccount = {
      body: {
        Account: "newAccount1",
      },
    };
    const res = {};
    const spy = sinon.spy(Aupdate, "getUpdateArgs");
    Aupdate.accountsUpdate(reqUpdateAccount, res);
    expect(spy.calledWith({ Account: "newAccount1" })).to.be.true;
    sinon.assert.calledOnce(spy);
  });
});
