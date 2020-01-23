const express = require("express");
const router = express.Router();
const app = express();

router.get("/web", (req, res) => {
  res.send(req.query);
});

app.use("/v1/process", router);

if (require.main === module) {
  const port = 4000;
  const server = app.listen(port, () => {
    console.info(`HTTP server is listening on http://localhost:${server.address().port}`);
  });
}

module.exports = app;
