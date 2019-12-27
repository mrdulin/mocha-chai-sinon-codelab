const TableModel = require("./tableModel");

async function main(idList, valueList) {
  const result = await TableModel.query()
    .whereIn("id", idList)
    .whereIn("value", valueList);

  return result;
}

module.exports = main;
