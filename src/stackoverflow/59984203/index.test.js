const expect = require("chai").expect;

class Test {
  run() {
    describe("test goes here", function() {
      it("sample test", function() {
        expect(1 + 1).to.be.eq(2);
      });
    });
  }
}

new Test().run();
