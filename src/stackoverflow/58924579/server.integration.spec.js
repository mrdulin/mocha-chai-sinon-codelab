const request = require("supertest");
const { expect } = require("chai");
const app = require("./server");

describe("/POST a book", () => {
  after((done) => {
    app.close(done);
  });
  it("should save a book", (done) => {
    const book_data = { name: "book_title" };
    request(app)
      .post("/books")
      .send(book_data)
      .expect(200)
      .end(function(err, res) {
        console.log(res.body);
        if (err) return done(err);
        expect(res.body).to.haveOwnProperty("id");
        done();
      });
  });
});
