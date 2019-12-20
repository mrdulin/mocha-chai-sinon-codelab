const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendStatus(200);
});

const port = 3002;
const server = app.listen(port, () => {
  console.info(`HTTP server is listening on http://localhost:${port}`);
});

module.exports = server;
