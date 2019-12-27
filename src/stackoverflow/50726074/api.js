function MyClass() {}
MyClass.prototype.get = async function get(route, reqOpts) {
  return "real data";
};

module.exports = MyClass;
