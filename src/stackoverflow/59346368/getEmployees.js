const database = require("./dbConn");

exports.handler = async function(event, context, callback) {
  const dbOptions = {};
  const pool = await database.getPool(dbOptions);
  const conn = await pool.getConnection();

  const dbResult = await conn.query("select * from employees");

  conn.release();

  return dbResult;
};
