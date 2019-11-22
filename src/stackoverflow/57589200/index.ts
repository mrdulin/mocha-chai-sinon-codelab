function func3(): string {
  return "some string";
}

function func4() {
  const rval = exports.func3();
  console.log(rval);
}
interface ImyInterface {}

class classA implements ImyInterface {
  public func1(): void {
    exports.func4();
  }
  public func2(): void {}
}

exports.func3 = func3;
exports.func4 = func4;
exports.classA = classA;
