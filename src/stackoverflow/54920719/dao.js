const Post = require("./models/post");

function findPostsByCategoryId(categoryId, first, second) {
  var sortingOrd = { createdAt: -1 };
  return Post.find({ categoryId: categoryId })
    .sort(sortingOrd)
    .skip(first)
    .limit(second);
}

module.exports = {
  findPostsByCategoryId,
};
