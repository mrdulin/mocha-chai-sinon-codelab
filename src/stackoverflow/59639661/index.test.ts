import { getOperations } from "./";
import sinon from "sinon";
import { expect } from "chai";

describe("59639661", () => {
  describe("#getOperations", () => {
    let customObj, store, someObj;
    beforeEach(function() {
      someObj = {
        id: "-2462813529277062688",
      };
      store = {
        peekRecord: sinon.stub().returns(someObj),
      };
    });
    it("should pass", async () => {
      const obj = await getOperations(customObj, store);
      expect(obj).to.deep.eq(someObj);
    });
  });
});
