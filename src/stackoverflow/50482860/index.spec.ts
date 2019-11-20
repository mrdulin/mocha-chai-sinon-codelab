import { getDataById } from "./";
import sinon from "sinon";
import { expect } from "chai";
import { knex } from "./db";

describe("getDataById", () => {
  it("should mock response", async () => {
    const mResponse = { id: 1 };
    const selectStub = sinon.stub().returnsThis();
    const whereStub = sinon.stub().resolves(mResponse);
    sinon.stub(knex, "from").callsFake((): any => {
      return {
        select: selectStub,
        where: whereStub
      };
    });
    const actual = await getDataById({ id: 1 });
    expect(actual).to.be.deep.eq(mResponse);
  });
});
