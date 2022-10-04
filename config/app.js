require("dotenv").config();

module.exports = {
  port: process.env.PORT || 3000,
  protocol: process.env.PROTOCOL || "https",
  host: process.env.HOST || "cse-341-fall-2022-pa-4.onrender.com",
};
