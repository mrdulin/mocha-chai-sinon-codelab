const { getFaculty, db } = require("./queries");
const sinon = require("sinon");

describe("queries", () => {
  afterEach(() => {
    sinon.restore();
  });
  it("should get faculty", async () => {
    const mReq = { query: { firstName: "Lin" } };
    const mRes = { status: sinon.stub().returnsThis(), send: sinon.stub() };
    const mNext = sinon.stub();
    const mData = { first_name: "Lin", last_name: "Du", phone_number: 123 };
    const oneStub = sinon.stub(db, "one").resolves(mData);

    await getFaculty(mReq, mRes, mNext);
    sinon.assert.calledWith(mRes.status, 200);
    sinon.assert.calledWith(mRes.send, { firstName: "Lin", lastName: "Du", phoneNum: 123 });
    sinon.assert.calledWith(oneStub, "SELECT * FROM users WHERE first_name= $1", ["Lin"]);
  });

  it("should call error handler middleware", async () => {
    const mReq = { query: { firstName: "Lin" } };
    const mRes = { status: sinon.stub().returnsThis(), send: sinon.stub() };
    const mNext = sinon.stub();
    const mError = new Error("connect error");
    const oneStub = sinon.stub(db, "one").rejects(mError);

    await getFaculty(mReq, mRes, mNext);
    sinon.assert.calledWith(mNext, mError);
    sinon.assert.calledWith(oneStub, "SELECT * FROM users WHERE first_name= $1", ["Lin"]);
  });
});
