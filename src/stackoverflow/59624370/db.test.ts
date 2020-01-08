import pg from "pg";
import sinon from "sinon";
import { expect } from "chai";

describe("59624370", () => {
  afterEach(() => {
    sinon.restore();
  });
  it("should pass", async () => {
    const mPool = { query: sinon.stub().resolves({ rows: [] }) };
    const poolStub = sinon.stub(pg, "Pool").callsFake(() => mPool);
    const { DbAccess } = require("./db");
    const db = new DbAccess();
    const consumer = { consumer_id: 1, email: "example@gmail.com" };
    const actual = await db.saveConsumer(consumer);
    expect(actual).to.be.eql({ rows: [] });
    sinon.assert.calledOnce(poolStub);
    sinon.assert.calledOnce(mPool.query);
  });
});
