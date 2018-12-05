const express = require("express");
const controller = require("./controller");

const useHTTPS = true;
const app = express();
app.get("/api/", controller.someFunction);

let server;
if (useHTTPS) {
  const https = require("https");
  const fs = require("fs");
  const path = require("path");

  const options = {
    key: fs.readFileSync(path.resolve(__dirname, "./config/key.pem")),
    cert: fs.readFileSync(path.resolve(__dirname, "./config/cert.pem")),
  };
  const port = 3443;
  server = https.createServer(options, app);
  server.listen(port);
  console.log("started HTTPS on port " + port);
} else {
  const port = 3000;
  server = app.listen(port);
  console.log("started HTTP on port " + port);
}

module.exports = server;
