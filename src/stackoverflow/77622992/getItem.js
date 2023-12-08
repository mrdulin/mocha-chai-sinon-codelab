const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: "your_database_user",
    password: "your_database_password",
    database: "myapp_test",
  },
});

const getItem = async (itemId) => {
  return knex("item")
    .where("id", itemId)
    .first();
};

module.exports = getItem;
