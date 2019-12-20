const express = require("express");
const app = express();

const memoryDB = {
  users: [{ name: "testname" }, { name: "haha" }],
};

app.get("/test", (req, res) => {
  console.log(req.query);
  const filterName = req.query.filter.split("eq")[1].trim();
  const user = memoryDB.users.find((user) => user.name === filterName);
  res.status(200).json(user);
});

module.exports = app;
