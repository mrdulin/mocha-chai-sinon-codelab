const main = require("./main");
const TableModel = require("./tableModel");
const sinon = require("sinon");
const { expect } = require("chai");

describe("50957424", () => {
  afterEach(() => {
    sinon.restore();
  });
  it("should pass", async () => {
    sinon.stub(TableModel);
    TableModel.query.returnsThis();
    TableModel.whereIn.withArgs("id").returnsThis();
    TableModel.whereIn.withArgs("value").resolves({ object: "stuff" });
    const actual = await main([1, 2], ["a", "b"]);
    expect(actual).to.be.eql({ object: "stuff" });
    sinon.assert.calledOnce(TableModel.query);
    sinon.assert.calledWith(TableModel.whereIn.firstCall, "id", [1, 2]);
    sinon.assert.calledWith(TableModel.whereIn.secondCall, "value", ["a", "b"]);
  });
});
