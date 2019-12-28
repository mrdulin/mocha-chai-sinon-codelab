// simulate Post model
const Post = {
  find(where) {
    return this;
  },
  sort(...args) {
    return this;
  },
  skip(...args) {
    return this;
  },
  limit(n) {},
};

module.exports = Post;
