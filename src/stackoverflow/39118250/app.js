const express = require("express");
const session = require("express-session");
const helpers = require("./helpers");
const app = express();

app.set("trust proxy", 1);
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  }),
);

app.post("/signin", (req, res) => {
  req.session.accessToken = "123123";
  console.info("signin success");
  res.status(200).end();
});

app.use("/api", helpers.hasAccessToken, require("./routes"));

const server = app.listen(3000, () => {
  console.info(`HTTP server is listening on http://localhost:${server.address().port}`);
});

module.exports = server;
