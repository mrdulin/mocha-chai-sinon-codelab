import { secondFunc, func } from "./";
import { expect } from "chai";
import * as name from "./file";
import sinon from "sinon";
import co from "co";

describe("59308604", () => {
  afterEach(() => {
    sinon.restore();
  });
  it("should pass secondFunc", () => {
    function* mGen() {
      yield "fake data";
    }
    const nameGetStub = sinon.stub(name, "get").returns(mGen());
    const gen = secondFunc("a", "b", "c");
    expect(gen.next().value).to.be.eql("fake data");
    expect(gen.next()).to.be.eql({ value: undefined, done: true });
    sinon.assert.calledWith(nameGetStub, "a");
  });

  it("should pass func", async () => {
    function* mGen() {
      return "fake data";
    }
    const nameGetStub = sinon.stub(name, "get").returns(mGen() as any);
    const actual = await func("a", "b", "c");
    expect(actual).to.be.equal("fake data");
    sinon.assert.calledWith(nameGetStub, "a");
  });

  it("test co", () => {
    function* g1() {
      return "123";
    }
    return co(function*() {
      const result = yield* g1();
      return result;
    }).then((value) => {
      expect(value).to.be.eql("123");
    });
  });
});
