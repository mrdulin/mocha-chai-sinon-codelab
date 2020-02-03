const express = require("express");

function server(port = 0) {
  return new Promise((resolve, reject) => {
    const app = express();

    app.get("/greet/:name", (req, res) => {
      res.json({ name: `Hello ${req.params.name}` });
    });

    const listener = app.listen(port, (err) => {
      if (err) return reject(err);
      resolve({
        port: listener.address().port,
        stop: () => listener.close(),
      });
    });
  });
}

if (require.main === module) {
  server(3000)
    .then(({ port, stop }) => {
      console.log("Server listening on port " + port);
    })
    .catch((err) => {
      console.error(err.stack);
      process.exit(1);
    });
}

module.exports = server;
