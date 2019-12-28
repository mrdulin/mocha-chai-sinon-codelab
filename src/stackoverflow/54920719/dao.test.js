const dao = require("./dao");
const Post = require("./models/post");
const sinon = require("sinon");
const { expect } = require("chai");

describe("54920719", () => {
  afterEach(() => {
    sinon.restore();
  });
  it("should pass", () => {
    sinon.stub(Post);
    Post.find.returnsThis();
    Post.sort.returnsThis();
    Post.skip.returnsThis();
    const mResponse = { rowCount: 100 };
    Post.limit.resolves(mResponse);

    return dao.findPostsByCategoryId(1, 2, 3).then((response) => {
      expect(response).to.be.eql(mResponse);
      sinon.assert.calledWithExactly(Post.find, { categoryId: 1 });
      sinon.assert.calledWithExactly(Post.sort, { createdAt: -1 });
      sinon.assert.calledWithExactly(Post.skip, 2);
      sinon.assert.calledWithExactly(Post.limit, 3);
    });
  });
});
