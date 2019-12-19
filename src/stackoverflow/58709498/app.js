const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const myDB = [{ post: "post_1", comment: "comment_1" }];

app.use(bodyParser.json());
app.put("/updatePost", (req, res) => {
  let index = Number(req.body.updateI) - 1;

  let updatedComment = { post: req.body.updateP, comment: req.body.updateC };
  myDB.splice(index, 1, updatedComment);

  res.json({ posts: myDB });
});

module.exports = {
  app,
  myDB,
};
