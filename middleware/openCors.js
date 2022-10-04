const openCors = (_req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  next();
};

module.exports = openCors;
