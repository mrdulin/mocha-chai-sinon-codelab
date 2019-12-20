const express = require("express");
const multer = require("multer");
const path = require("path");
const crypto = require("crypto");
const app = express();

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.resolve(__dirname, "uploads/"));
  },
  filename: function(req, file, cb) {
    crypto.pseudoRandomBytes(16, function(err, raw) {
      if (err) return cb(err);

      cb(null, raw.toString("hex") + path.extname(file.originalname));
    });
  },
});
const upload = multer({ storage });

app.post("/companies/", upload.single("logo"), (req, res) => {
  console.log("req.body: ", req.body);
  console.log("req.file:", req.file);
  res.sendStatus(200);
});

module.exports = app;
