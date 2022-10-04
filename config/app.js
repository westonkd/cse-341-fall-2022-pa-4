require("dotenv").config();

const port = process.env.PORT || 3000;

module.exports = {
  port,
  protocol: process.env.PROTOCOL,
  host: process.env.HOST || `localhost:${port}`,
};
