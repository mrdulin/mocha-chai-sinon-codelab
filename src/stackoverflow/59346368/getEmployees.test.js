const { handler } = require("./getEmployees.js");
const database = require("./dbConn");
const sinon = require("sinon");
const { expect } = require("chai");

describe("getEmployees", () => {
  afterEach(() => {
    sinon.restore();
  });
  it("should pass", async () => {
    const connStub = { query: sinon.stub().resolves({ rowCount: 1 }), release: sinon.stub() };
    const poolStub = { getConnection: sinon.stub().resolves(connStub) };
    sinon.stub(database, "getPool").resolves(poolStub);
    const actual = await handler();
    expect(actual).to.be.eql({ rowCount: 1 });
    sinon.assert.calledWith(database.getPool, {});
    sinon.assert.calledOnce(poolStub.getConnection);
    sinon.assert.calledWith(connStub.query, "select * from employees");
    sinon.assert.calledOnce(connStub.release);
  });
});
