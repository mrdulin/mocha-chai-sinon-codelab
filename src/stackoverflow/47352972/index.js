const errorHandler = require("./error-handler");
const transformRequest = require("./request-converter");
const convert = require("./convert");

exports.generateReport = function generateReport(req, res) {
  console.log("HELLO");
  const objectToPopulateTemplate = transformRequest(req.body);
  convert(objectToPopulateTemplate, function(e, data) {
    if (e) {
      console.log("BYE");
      const error = errorHandler(e);
      return res.send(error.httpCode).json(error);
    }
    console.log("GOOD");
    res
      .set("Content-Type", "application/pdf")
      .set(
        "Content-Disposition",
        `attachment; filename=velocity_report_${new Date()}.pdf`
      )
      .set("Content-Length", data.length)
      .status(200)
      .end(data);
  });
};
