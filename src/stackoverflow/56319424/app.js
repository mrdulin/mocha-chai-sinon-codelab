const express = require("express");
const app = express();

app.get("/rbac/aa/contentful/getReport", (req, res) => {
  res.sendStatus(200);
});

module.exports = app;
