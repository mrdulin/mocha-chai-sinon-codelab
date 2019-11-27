const logger = require("./logger");
const controller = require("./controller");

module.exports.verify = (req, res) => {
  const log = logger(req, __filename);

  controller.verify(req.query.code, (err, response) => {
    log("Verifying query code.");
    log.error(err, "There was an error.");
  });
};
