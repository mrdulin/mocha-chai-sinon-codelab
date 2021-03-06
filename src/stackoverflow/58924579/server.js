const express = require("express");
const bookController = require("./bookController");
const http = require("http");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.post("/books", [bookController.create_a_book]);

const server = http.createServer(app).listen(3001, () => {
  console.log("HTTP server is listening on http://localhost:3001");
});

module.exports = server;
