module.exports = {
  saveInGlobal: async () => {
    if (global.pass !== null && global.pass !== "") {
      return module.exports.getPass().then((res) => {
        return (global.pass = res);
      });
    }
  },
  getPass: async () => {
    return "test";
  },
};
