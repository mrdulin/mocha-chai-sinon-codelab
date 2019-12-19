const express = require("express");
const validServiceURL = require("./validServiceURL");
const app = express();

async function checkUser(req, res) {
  console.log("checkUser");
}

function reditectToHomePageWithError(res, message) {
  console.log(message);
}

const login = async (req, res) => {
  try {
    if (await validServiceURL(req.headers.host)) {
      await checkUser(req, res);
    } else {
      res.redirect("/");
    }
  } catch (err) {
    reditectToHomePageWithError(res, err.message);
  }
};

app.post("/login", login);

module.exports = app;
