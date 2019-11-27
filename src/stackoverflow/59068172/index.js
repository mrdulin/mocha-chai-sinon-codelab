const rp = require("request-promise");

async function readSite() {
  try {
    let response = await rp("http://www.google.com");
    return response;
  } catch (err) {
    console.log(err);
  }
}

async function main() {
  let response = await exports.readSite();
  return response;
}

exports.readSite = readSite;
exports.main = main;
