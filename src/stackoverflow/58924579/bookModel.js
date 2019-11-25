module.exports = {
  async createBook(data) {
    data._id = Math.random();
    return data;
  },
};
