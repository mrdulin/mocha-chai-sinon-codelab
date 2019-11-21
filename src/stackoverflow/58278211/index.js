const NodeCache = require("node-cache");
const cache = new NodeCache();

const testFunction = () => {
  let myStringCache = cache.get("cacheName1");
  let myArrayCache = cache.get("cacheName2");
  console.log("myStringCache:", myStringCache);
  console.log("myArrayCache:", myArrayCache);
  return "return something";
};

module.exports = {
  testFunction
};
