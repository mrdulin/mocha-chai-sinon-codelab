const request = require("request");
const config = { urlBase: "" };

class Validate {
  static validateTicket = (ticket) => {
    const options = { url: config.urlBase + ticket, json: true, rejectUnauthorized: false };

    return new Promise((resolve, reject) => {
      request.get(options, (error, response, body) => {
        if (error) {
          reject(error);
          return;
        }

        if (response) {
          resolve(response);
          return;
        }

        reject(null);
      });
    });
  };
}

module.exports = Validate;
