const cors = require("cors");

var corsOptions = {
  origin: "*http://example.com*",
};

module.exports = cors(corsOptions);
