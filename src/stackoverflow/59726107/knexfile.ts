const settings = {
  client: "postgresql",
  connection: {
    host: process.env.SQL_HOST,
    port: process.env.SQL_PORT,
    database: process.env.SQL_DATABASE,
    user: process.env.SQL_USER,
    password: process.env.SQL_PASSWORD,
    ssl: process.env.SQL_SSL,
  },
  debug: true,
  pool: {
    min: 2,
    max: 20,
  },
  migrations: {
    directory: "./migrations",
  },
  seeds: {
    directory: "./seeds",
  },
};
export default settings;
