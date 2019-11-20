import { MyClass } from "./";
import sinon from "sinon";
import axios from "axios";
import { expect } from "chai";

describe("MyClass", () => {
  describe("#fetch", () => {
    let stub;
    beforeEach(() => {
      stub = sinon.stub(axios, "get");
    });
    afterEach(() => {
      stub.restore();
    });
    it("should send request with correct parameters", () => {
      const myclass = new MyClass();
      myclass.fetch();
      expect(
        stub.calledWith("/test", {
          params: { start: "2018-01-01", end: "2018-01-30" }
        })
      ).to.be.true;
    });
  });
});
