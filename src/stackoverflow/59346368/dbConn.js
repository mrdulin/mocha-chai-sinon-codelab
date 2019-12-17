const mysql = require("mysql2/promise");

async function getPool(options = {}) {
  const optionsClone = {};
  return await mysql.createPool(optionsClone);
}

module.exports = {
  getPool,
};
