import { model } from "./";
import sinon from "sinon";
import { expect } from "chai";

describe("model", () => {
  describe("#find", () => {
    afterEach(() => {
      sinon.restore();
    });
    it("should find user", async () => {
      const mUser = {
        id: 1,
        name: "my name",
      };

      const getRepository = sinon.stub(model.connection, "getRepository").returnsThis();
      const createQueryBuilder = sinon.stub(model.connection, "createQueryBuilder").returnsThis();
      const where = sinon.stub(model.connection, "where").returnsThis();
      const getOne = sinon.stub(model.connection, "getOne").resolves(mUser);

      const user = await model.find(1);
      expect(user).to.be.eql(mUser);
      expect(getRepository.calledWith("User")).to.be.true;
      expect(createQueryBuilder.calledWith("user")).to.be.true;
      expect(where.calledWith("user.id = :id", { id: 1 })).to.be.true;
      expect(getOne.calledOnce).to.be.true;
    });
  });
});
