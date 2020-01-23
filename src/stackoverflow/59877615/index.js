function function1() {}

function function2(arg) {}

class SomeClass {
  topFunction(foo, bar) {
    if (foo === bar) {
      exports.function1();
    }
    exports.function2(foo);
  }
}

exports.function1 = function1;
exports.function2 = function2;
exports.SomeClass = SomeClass;
