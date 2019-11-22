"use strict";

const geoip = require("maxmind");
const path = require("path");

const countryLookUp = geoip.open(path.join(__dirname, "../database/GeoLite2-Country.mmdb"));

function getDefaultValue() {
  return {
    country: {
      iso_code: "",
      names: {
        en: "",
      },
    },
  };
}

module.exports.getCountryByIp = async (ipAddress) => {
  const result = (await countryLookUp.get(ipAddress)) || getDefaultValue();
  return {
    code: result.country.iso_code,
    name: result.country.names.en,
  };
};
