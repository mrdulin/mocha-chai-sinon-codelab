const database = require("./dbConn");

exports.handler = async function(event, context, callback) {
  const dbOptions = {};
  let pool = await database.getPool(dbOptions);
  let conn = await pool.getConnection();

  const dbResult = await conn.query("select * from employees");

  conn.release();

  return dbResult;
};
