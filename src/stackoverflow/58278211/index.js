const NodeCache = require("node-cache");
const cache = new NodeCache();

const testFunction = () => {
  const myStringCache = cache.get("cacheName1");
  const myArrayCache = cache.get("cacheName2");
  console.log("myStringCache:", myStringCache);
  console.log("myArrayCache:", myArrayCache);
  return "return something";
};

module.exports = {
  testFunction,
};
