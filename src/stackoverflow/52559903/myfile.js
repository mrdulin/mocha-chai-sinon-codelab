module.exports = class A {
  constructor(classB_Obj) {
    this.classBobj = classB_Obj;
    this.classBobj.someFunctionOfClassB();
  }
  doSomething() {}
};
