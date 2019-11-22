const sendEmail = require("./sendEmail");
// @ts-ignore
const submitDetails = {};

// @ts-ignore
submitDetails.submitDetails = (query) => {
  return sendEmail.sendEmail(query);
};

module.exports = submitDetails;
