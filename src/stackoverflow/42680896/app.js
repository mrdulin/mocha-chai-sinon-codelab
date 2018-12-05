const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  const error = new Error("make an error");
  next(error);
});

app.use((err, req, res, next) => {
  console.log("error: ", err.message);
  res.status(422).send({ error: err.message });
});

module.exports = app;
