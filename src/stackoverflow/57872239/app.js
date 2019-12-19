const express = require("express");
const app = express();
const { Router } = require("express");

app.use(express.json());
const router = new Router();

function controller(req, res) {
  res.sendStatus(500);
}
router.delete("/:id?", controller);

app.use("/api/credentials", router);

module.exports = app;
