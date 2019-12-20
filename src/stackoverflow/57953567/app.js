const express = require("express");
const router = express.Router();
const app = express();

router.get("/web", (req, res) => {
  res.send(req.query);
});

app.use("/v1/process", router);

module.exports = app;
