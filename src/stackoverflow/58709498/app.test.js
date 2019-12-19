const myApp = require("./app");
const supertest = require("supertest");

describe("Put /", function() {
  it("I should access the Put route ", function(done) {
    supertest(myApp.app)
      .put("/updatePost")
      .send({
        updateI: "1",
        updateP: "update_post_1",
        updateC: "update_comment_1",
      })
      .expect((res) => {
        console.log(myApp.myDB);
        if (myApp.myDB[0].post !== "update_post_1") {
          throw new Error("Update error");
        }
      })
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});
