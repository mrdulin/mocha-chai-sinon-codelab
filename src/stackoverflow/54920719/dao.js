const Post = require("./models/post");

function findPostsByCategoryId(categoryId, first, second) {
  const sortingOrd = { createdAt: -1 };
  return Post.find({ categoryId: categoryId })
    .sort(sortingOrd)
    .skip(first)
    .limit(second);
}

module.exports = {
  findPostsByCategoryId,
};
