const express = require("express");
const session = require("express-session");

const app = express();
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  }),
);

app.post("/signin", (req, res) => {
  req.session.auth = "123";
  console.info("sign in success");
  res.status(200).end();
});

app.get("/protected", (req, res) => {
  console.log("req.session.auth: ", req.session.auth);
  if (!req.session.auth) {
    return res.sendStatus(401);
  }
  res.json({ data: "protected data" });
});

module.exports = app;
