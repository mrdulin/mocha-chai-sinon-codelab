import sinon from "sinon";
import { resolvers } from "./answer";
import { expect } from "chai";

describe("Answer", () => {
  describe("Query Answer", () => {
    it("should return answer by id", async () => {
      const expected = { id: "xxx" };
      const inputId = "100";

      const knexInstanceStub = {
        query: sinon.stub().returnsThis(),
        where: sinon.stub().returnsThis(),
        first: sinon.stub().resolves(expected),
      };

      const result = await resolvers.Query.attempt(null, { id: inputId }, { db: knexInstanceStub });
      sinon.assert.calledOnce(knexInstanceStub.query);
      sinon.assert.calledOnce(knexInstanceStub.where);
      sinon.assert.calledOnce(knexInstanceStub.first);
      expect(result).to.be.deep.eq(expected);
    });
  });
});
