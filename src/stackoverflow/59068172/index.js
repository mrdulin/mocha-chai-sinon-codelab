const rp = require("request-promise");

async function readSite() {
  try {
    const response = await rp("http://www.google.com");
    return response;
  } catch (err) {
    console.log(err);
  }
}

async function main() {
  const response = await exports.readSite();
  return response;
}

exports.readSite = readSite;
exports.main = main;
