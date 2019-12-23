const axios = require("axios");

function getTextBody(url) {
  return axios.get(url);
}

module.exports = { getTextBody };
