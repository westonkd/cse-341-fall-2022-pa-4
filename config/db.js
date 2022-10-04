require("dotenv").config();

module.exports = {
  connectionString: process.env.DB_CONNECTION_STRING,
  name: process.env.DB_NAME,
};
