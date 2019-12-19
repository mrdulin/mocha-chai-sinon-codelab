const express = require("express");
const session = require("express-session");
const app = express();

app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  }),
);

function controller(req, res) {
  const clientData = req.query;
  console.log(clientData);
  req.session.clientData = clientData;
  res.sendStatus(302);
}

app.get("/router", controller);

app.get("/api", (req, res) => {
  res.sendStatus(200);
});

module.exports = app;
