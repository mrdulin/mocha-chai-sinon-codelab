import { VMBilling } from "./model";
import sinon from "sinon";
const recordCtrl = require("./controller");

describe("getMultipleRecords()", () => {
  const next = () => {};
  const req = { body: { records: [1, 2, 3] } };
  const res = {};
  afterEach(() => {
    sinon.restore();
  });

  it("Should call VMBilling.findAll()", async function() {
    const findAll = sinon.spy(VMBilling, "findAll");
    await recordCtrl.getMultipleRecords(req, res, next);
    sinon.assert.calledOnce(findAll);
  });

  it("Should call getDetails()", async function() {
    const gd = sinon.spy(recordCtrl, "getDetails");
    await recordCtrl.getMultipleRecords(req, res, next);
    sinon.assert.calledOnce(gd);
  });
});
