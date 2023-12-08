const proxyquire = require("proxyquire");
const sinon = require("sinon");

describe("77622992", () => {
  it("should pass", async () => {
    const knexClient = sinon.stub().returns({
      where: sinon.stub().returnsThis(),
      first: sinon.stub().resolves({ id: 1 }),
    });
    const knexStub = sinon.stub().returns(knexClient);
    const getItem = proxyquire("./getItem", {
      knex: knexStub,
    });
    const r = await getItem(1);
    sinon.assert.match(r, { id: 1 });
  });
});
