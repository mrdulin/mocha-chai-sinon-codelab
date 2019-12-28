const db = require("./db-factory")();

module.exports = {
  addUser: function(req, res) {
    if (req.body.deviceID === undefined) {
      res.status(400).json({ error: "deviceID is missing" });
      return;
    }

    db.save(req.body, function(err) {
      if (err) {
        return res.sendStatus(500);
      }
      res.sendStatus(201);
    });
  },
};
